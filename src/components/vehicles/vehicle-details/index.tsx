import { VehicleI } from 'interfaces/vehicles'

import { Flex } from 'components/common/flex'
import { FavoriteButton } from 'components/common/favorite-button'
import { DetailsTable } from 'components/common/details-table'
import { RelationsLinks } from 'components/common/relations-links'

export interface VehicleDetailsPropsI {
  entity: VehicleI
}

function VehicleDetails(props: VehicleDetailsPropsI) {
  const { entity } = props

  const details = {
    Model: entity.model,
    Manufacturer: entity.manufacturer,
    'Cost in credits': entity.cost_in_credits,
    Length: entity.length,
    Crew: entity.crew,
    'Max atmosphering speed': entity.max_atmosphering_speed,
    Passengers: entity.passengers,
    'Cargo capacity': entity.cargo_capacity,
    Consumables: entity.consumables,
    'Vehicle class': entity.vehicle_class,
  }

  return (
    <article>
      <Flex as="header">
        <h1>{entity.name}</h1>
        <FavoriteButton url={entity.url} />
      </Flex>
      <DetailsTable details={details} />
      <RelationsLinks
        title="Pilots:"
        relationType="people"
        relationUrls={entity.pilots}
      />
      <RelationsLinks
        title="Films:"
        relationType="films"
        relationUrls={entity.films}
      />
    </article>
  )
}

export { VehicleDetails }
