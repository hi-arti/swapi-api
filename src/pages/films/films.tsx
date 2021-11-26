import { useEffect } from 'react'
import { useCurrentPath } from 'hooks/router'

import { films } from 'store'

import { FooterNavigation } from 'components/common/footer-navigation'
import { FilmsList } from 'components/films/films-list'
import { PageLayout } from '../common/page-layout'

function Films() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    films.actions.loadPageIfNeeded(currentPath)
  }, [currentPath])

  const status = films.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const page = films.store.usePickState(
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
      <FilmsList entities={results} />
      <FooterNavigation next={next} previous={previous} />
    </PageLayout>
  )
}

export { Films }
