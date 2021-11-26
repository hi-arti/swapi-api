import { useEffect, useMemo, useRef, useState } from 'react'

export type ChangeStateI<T> = (state: T) => void
export type GetStateI<T> = () => T
export type PickStateI<T, R> = (state: T) => R
export type ChangeStoreListenerI<T> = (state: T) => void
export type SubscribeI<T> = (cb: ChangeStoreListenerI<T>) => () => void

export type StoreI<T> = {
  change: ChangeStateI<T>
  getState: GetStateI<T>
  subscribe: SubscribeI<T>
}

function makeStore<T>(initialState: T) {
  let state = initialState

  const listeners = new Set<ChangeStoreListenerI<T>>()

  const subscribe: SubscribeI<T> = cb => {
    listeners.add(cb)

    return () => {
      listeners.delete(cb)
    }
  }

  const notify = () => {
    listeners.forEach(cb => {
      cb(state)
    })
  }

  const change: ChangeStateI<T> = nextState => {
    state = nextState
    notify()
  }

  const getState: GetStateI<T> = () => state

  const usePickState = <R>(
    pickProps: PickStateI<T, R>,
    dependsOn: ReadonlyArray<unknown> = []
  ) => {
    const [, setRendered] = useState(0)

    const lastRenderedStateRef = useRef(state)

    useEffect(() => {
      return subscribe(nextState => {
        if (lastRenderedStateRef.current !== nextState) {
          setRendered(count => ++count)
        }
      })
    }, [])

    return useMemo(() => {
      lastRenderedStateRef.current = state

      return pickProps(state)
    }, [state, ...dependsOn])
  }

  return { subscribe, change, getState, usePickState }
}

export { makeStore }
