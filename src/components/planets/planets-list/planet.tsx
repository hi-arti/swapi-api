import { PlanetI } from 'interfaces/planets'

import { InternalLink } from 'components/common/link/internal'
import {
  ItemLayout,
  ItemLayoutHeader,
  ItemLayoutFooter,
} from 'components/common/items-list/item-layout'
import { DetailsTable } from 'components/common/details-table'
import { FavoriteButton } from 'components/common/favorite-button'

export interface PlanetPropsI {
  item: PlanetI
}

function Planet(props: PlanetPropsI) {
  const { item } = props

  const details = {
    Climate: item.climate,
    Diameter: item.diameter,
    Gravity: item.gravity,
    'Orbital period': item.orbital_period,
    Population: item.population,
    'Rotation period': item.rotation_period,
    Terrain: item.terrain,
    'Surface water': item.surface_water,
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

export { Planet }
