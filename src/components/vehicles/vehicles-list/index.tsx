import { VehicleI } from 'interfaces/vehicles'

import { ItemsList } from 'components/common/items-list'
import { Vehicle } from './vehicle'

export interface VehiclesListPropsI {
  vehicles: VehicleI[]
}

function VehiclesList(props: VehiclesListPropsI) {
  const { vehicles } = props

  return <ItemsList items={vehicles} Item={Vehicle} title="Vehicles:" />
}

export { VehiclesList }
