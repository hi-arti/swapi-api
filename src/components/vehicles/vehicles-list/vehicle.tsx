import { VehicleI } from 'interfaces/vehicles'

import { InternalLink } from 'components/common/link/internal'
import {
  ItemLayout,
  ItemLayoutHeader,
  ItemLayoutFooter,
} from 'components/common/items-list/item-layout'
import { DetailsTable } from 'components/common/details-table'
import { FavoriteButton } from '../../common/favorite-button'

export interface VehiclePropsI {
  item: VehicleI
}

function Vehicle(props: VehiclePropsI) {
  const { item } = props

  const details = {
    Model: item.model,
    Manufacturer: item.manufacturer,
    'Cost in credits': item.cost_in_credits,
    Length: item.length,
    Crew: item.crew,
    'Max atmosphering speed': item.max_atmosphering_speed,
    Passengers: item.passengers,
    'Cargo capacity': item.cargo_capacity,
    Consumables: item.consumables,
    'Vehicle class': item.vehicle_class,
    Pilots: item.pilots.length,
    Films: item.films.length,
  }

  return (
    <ItemLayout>
      <ItemLayoutHeader title={item.name} />
      <DetailsTable details={details} />
      <ItemLayoutFooter>
        <InternalLink to={item.url}>Reed more...</InternalLink>
        <FavoriteButton url={item.url} />
      </ItemLayoutFooter>
    </ItemLayout>
  )
}

export { Vehicle }
