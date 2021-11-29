import { useCurrentPath } from 'hooks/router'
import { useEffect } from 'react'

import { planets } from 'store'

import { PlanetDetails } from 'components/planets/planet-details'
import { PageLayout } from '../common/page-layout'

function Planet() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    planets.actions.loadEntityIfNeeded(currentPath)
  }, [currentPath])

  const status = planets.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const entity = planets.store.usePickState(
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
      <PlanetDetails entity={entity} />
    </PageLayout>
  )
}

export { Planet }
