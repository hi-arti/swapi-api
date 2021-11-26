import { useEffect } from 'react'
import { useCurrentPath } from 'hooks/router'

import { people } from 'store'

import { FooterNavigation } from 'components/common/footer-navigation'
import { PeopleList } from 'components/people/people-list'
import { PageLayout } from '../common/page-layout'

function People() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    people.actions.loadPageIfNeeded(currentPath)
  }, [currentPath])

  const status = people.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const page = people.store.usePickState(
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
      <PeopleList people={results} />
      <FooterNavigation next={next} previous={previous} />
    </PageLayout>
  )
}

export { People }
