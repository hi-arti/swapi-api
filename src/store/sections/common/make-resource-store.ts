import { makeStore } from 'store/common/make-store'

import Dictionary from 'interfaces/utils'
import { LoadStatusI } from 'interfaces/load-status'
import { PageI } from 'interfaces/page'

export type ResourceStateI<T> = {
  statuses: Dictionary<LoadStatusI>
  resources: Dictionary<T>
  pages: Dictionary<PageI<T>>
}

export function makeResourceStore<T>() {
  const initialState: ResourceStateI<T> = {
    resources: {},
    statuses: {},
    pages: {},
  }

  return makeStore(initialState)
}
