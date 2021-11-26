import { composeUrl, makeRequest } from './utils'

import { PageI } from 'interfaces/page'

const BASE_API_URL = 'https://swapi.dev/api'

function removeBaseUrl(url: string, baseUrl: string) {
  return url.replace(baseUrl, '')
}

export type ResourceApiI<T> = {
  loadPage: (pageUrl: string) => Promise<PageI<T>>
  loadEntity: (pageUrl: string) => Promise<T>
}

function makeApiEndpoint<T extends object>(urlKeys: string[]): ResourceApiI<T> {
  function normaliseEntity(entity: T) {
    urlKeys.forEach(relationKey => {
      // TODO: find better solution to define types
      const value = (entity as any)[relationKey]

      ;(entity as any)[relationKey] =
        typeof value === 'string'
          ? removeBaseUrl(value, BASE_API_URL)
          : value.map((url: string) => removeBaseUrl(url, BASE_API_URL))
    })

    return entity
  }

  async function loadPage(pageUrl: string): Promise<PageI<T>> {
    const url = composeUrl(BASE_API_URL, pageUrl)

    const response: PageI<T> = await makeRequest(url)
    const { next, previous, results } = response

    return {
      ...response,
      next: next && removeBaseUrl(next, BASE_API_URL),
      previous: previous && removeBaseUrl(previous, BASE_API_URL),
      results: results.map(entity => normaliseEntity(entity)),
    }
  }

  async function loadEntity(url: string) {
    const entityUrl = composeUrl(BASE_API_URL, url)

    const entity = await makeRequest<T>(entityUrl)

    return normaliseEntity(entity)
  }

  return { loadEntity, loadPage }
}

export { makeApiEndpoint }
