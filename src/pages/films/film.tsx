import { useCurrentPath } from 'hooks/router'
import { useEffect } from 'react'

import { FilmI } from 'interfaces/films'

import { films } from 'store'

import { FilmDetails } from 'components/films/film-details'
import { PageLayout } from '../common/page-layout'

function Film() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    films.actions.loadEntityIfNeeded(currentPath)
  }, [currentPath])

  const status = films.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const entity: FilmI = films.store.usePickState(
    state => state.resources[currentPath],
    [currentPath]
  )

  if (!status?.loaded) {
    return (
      <PageLayout>
        <h2>Loading...</h2>
      </PageLayout>
    )
  }

  if (status?.error) {
    return (
      <PageLayout>
        <h2>Not found that film</h2>
        <pre>{status.error}</pre>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <FilmDetails entity={entity} />
    </PageLayout>
  )
}

export { Film }
