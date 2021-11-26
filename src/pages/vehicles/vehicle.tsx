import { useEffect } from 'react'
import { useCurrentPath } from 'hooks/router'

import { vehicles } from 'store'

import { PageLayout } from '../common/page-layout'
import { VehicleDetails } from 'components/vehicles/vehicle-details'

function Vehicle() {
  const currentPath = useCurrentPath()

  useEffect(() => {
    vehicles.actions.loadEntityIfNeeded(currentPath)
  }, [currentPath])

  const status = vehicles.store.usePickState(
    state => state.statuses[currentPath],
    [currentPath]
  )
  const entity = vehicles.store.usePickState(
    state => state.resources[currentPath],
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
        <h2>Not found that vehicle</h2>
        <pre>{status.error}</pre>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <VehicleDetails entity={entity} />
    </PageLayout>
  )
}

export { Vehicle }
