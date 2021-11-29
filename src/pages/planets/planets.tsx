import { useEffect } from 'react'
import { useCurrentPath } from 'hooks/router'

import { planets } from 'store'

import { FooterNavigation } from 'components/common/footer-navigation'
import { PlanetsList } from 'components/planets/planets-list'
import { PageLayout } from '../common/page-layout'

function Planets() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    planets.actions.loadPageIfNeeded(currentPath)
  }, [currentPath])

  const status = planets.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const page = planets.store.usePickState(
    state => state.pages[currentPath],
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
        <h2>Not found that page</h2>
        <pre>{status.error}</pre>
      </PageLayout>
    )
  }

  const { results, next, previous } = page

  return (
    <PageLayout>
      <PlanetsList entities={results} />
      <FooterNavigation next={next} previous={previous} />
    </PageLayout>
  )
}

export { Planets }
