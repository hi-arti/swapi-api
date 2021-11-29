import { PlanetI } from 'interfaces/planets'

import { Flex } from 'components/common/flex'
import { FavoriteButton } from 'components/common/favorite-button'
import { DetailsTable } from 'components/common/details-table'
import { RelationsLinks } from 'components/common/relations-links'

export interface PlanetDetailsPropsI {
  entity: PlanetI
}

function PlanetDetails(props: PlanetDetailsPropsI) {
  const { entity } = props

  const details = {
    Climate: entity.climate,
    Diameter: entity.diameter,
    Gravity: entity.gravity,
    'Orbital period': entity.orbital_period,
    Population: entity.population,
    'Rotation period': entity.rotation_period,
    Terrain: entity.terrain,
    'Surface water': entity.surface_water,
  }

  return (
    <article>
      <Flex as="header">
        <h1>{entity.name}</h1>
        <FavoriteButton url={entity.url} />
      </Flex>
      <DetailsTable details={details} />
      <Flex wrap align="start">
        <RelationsLinks
          title="Films:"
          relationType="films"
          relationUrls={entity.films}
          labelRelationKey="title"
        />
        <RelationsLinks
          title="People:"
          relationType="people"
          relationUrls={entity.residents}
          labelRelationKey="name"
        />
      </Flex>
    </article>
  )
}

export { PlanetDetails }
