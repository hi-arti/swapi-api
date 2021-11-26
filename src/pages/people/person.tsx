import { useCurrentPath } from 'hooks/router'
import { useEffect } from 'react'

import { people } from 'store'

import { PersonDetails } from 'components/people/person-details'
import { PageLayout } from '../common/page-layout'

function Person() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    people.actions.loadEntityIfNeeded(currentPath)
  }, [currentPath])

  const status = people.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const entity = people.store.usePickState(
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
        <h2>Not found that person</h2>
        <pre>{status.error}</pre>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <PersonDetails entity={entity} />
    </PageLayout>
  )
}

export { Person }
