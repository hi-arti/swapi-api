import { store } from './store'

export function addToFavorite(pageUrl: string) {
  const state = store.getState()

  const nextState = { ...state, [pageUrl]: true }

  return store.change(nextState)
}

export function removeFromFavorite(pageUrl: string) {
  const state = store.getState()

  const nextState = { ...state }
  delete nextState[pageUrl]

  return store.change(nextState)
}
