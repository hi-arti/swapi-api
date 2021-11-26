import { useEffect } from 'react'
import { useCurrentPath } from 'hooks/router'

import { vehicles } from 'store'

import { PageLayout } from 'pages/common/page-layout'
import { FooterNavigation } from 'components/common/footer-navigation'
import { VehiclesList } from 'components/vehicles/vehicles-list'

function Vehicles() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    vehicles.actions.loadPageIfNeeded(currentPath)
  }, [currentPath])

  const status = vehicles.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const page = vehicles.store.usePickState(
    state => state.pages[currentPath],
    [currentPath]
  )

  if (!status || status.loading) {
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
      <VehiclesList vehicles={results} />
      <FooterNavigation next={next} previous={previous} />
    </PageLayout>
  )
}

export { Vehicles }
