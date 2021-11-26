import { mapValues } from 'utils/map-values'

import Dictionary from 'interfaces/utils'
import { LoadStatusI } from 'interfaces/load-status'
import { StoreI } from 'store/common/make-store'

export const loadingStatus: LoadStatusI = {
  loaded: false,
  loading: true,
  error: null,
}

export const loadedStatus: LoadStatusI = {
  loaded: true,
  loading: false,
  error: null,
}

export function setLoadingStatus<
  T extends { statuses: Dictionary<LoadStatusI> }
>(store: StoreI<T>, url: string) {
  const currentState = store.getState()

  store.change({
    ...currentState,
    statuses: {
      ...currentState.statuses,
      [url]: loadingStatus,
    },
  })
}

export function setErrorStatus<T extends { statuses: Dictionary<LoadStatusI> }>(
  store: StoreI<T>,
  url: string,
  error: string
) {
  const currentState = store.getState()

  store.change({
    ...currentState,
    statuses: {
      ...currentState.statuses,
      [url]: { ...loadedStatus, error },
    },
  })
}

export function composeLoadedStatusesMap<T>(entitiesMap: Dictionary<T>) {
  return mapValues(entitiesMap, () => loadedStatus)
}
