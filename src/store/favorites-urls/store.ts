import Dictionary from 'interfaces/utils'

import { set, get } from 'utils/storage'

import { makeStore } from '../common/make-store'

const LOCAL_STORAGE_KEY = '__favorites'

const initialState: Dictionary<boolean> = get(LOCAL_STORAGE_KEY, {})

const store = makeStore(initialState)

// Storage favorites urls
store.subscribe(nextState => set(LOCAL_STORAGE_KEY, nextState))

export { store }
