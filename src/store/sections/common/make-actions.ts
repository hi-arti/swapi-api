import { keyBy } from 'utils/key-by'

import {
  setErrorStatus,
  setLoadingStatus,
  composeLoadedStatusesMap,
  loadedStatus,
} from './status'

import { StoreI } from 'store/common/make-store'
import { ResourceApiI } from 'api/make-endpoint'
import { ResourceStateI } from './make-resource-store'

function makeActions<T extends { url: string }>(
  api: ResourceApiI<T>,
  store: StoreI<ResourceStateI<T>>
) {
  async function loadPage(pageUrl: string) {
    setLoadingStatus(store, pageUrl)

    const response = await api
      .loadPage(pageUrl)
      .catch((err: { detail: string }) => {
        setErrorStatus(store, pageUrl, err.detail)

        throw err
      })

    const loadedEntitiesMap = keyBy(response.results, 'url')
    const loadedEntitiesStatuses = composeLoadedStatusesMap(loadedEntitiesMap)

    const currentState = store.getState()

    const nextStatuses = {
      ...currentState.statuses,
      ...loadedEntitiesStatuses,
      [pageUrl]: loadedStatus,
    }

    const nextResources = {
      ...currentState.resources,
      ...loadedEntitiesMap,
    }

    const nextPages = { ...currentState.pages, [pageUrl]: response }

    const nextState = {
      ...currentState,
      statuses: nextStatuses,
      resources: nextResources,
      pages: nextPages,
    }

    store.change(nextState)
  }

  async function loadEntity(pageUrl: string) {
    setLoadingStatus(store, pageUrl)

    const entity = await api
      .loadEntity(pageUrl)
      .catch((err: { detail: string }) => {
        setErrorStatus(store, pageUrl, err.detail)

        throw err
      })

    const currentState = store.getState()

    const nextStatuses = {
      ...currentState.statuses,
      [pageUrl]: loadedStatus,
    }

    const nextResources = {
      ...currentState.resources,
      [pageUrl]: entity,
    }

    const nextState = {
      ...currentState,
      pages: currentState.pages,
      statuses: nextStatuses,
      resources: nextResources,
    }

    store.change(nextState)
  }

  function loadPageIfNeeded(pageUrl: string) {
    const status = store.getState().statuses[pageUrl]

    if (status && (status.loaded || status.loading)) {
      return
    }

    return loadPage(pageUrl)
  }

  function loadEntityIfNeeded(pageUrl: string) {
    const status = store.getState().statuses[pageUrl]

    if (status && (status.loaded || status.loading)) {
      return
    }

    return loadEntity(pageUrl)
  }

  return { loadPage, loadEntity, loadPageIfNeeded, loadEntityIfNeeded }
}

export { makeActions }
