import { PersonI } from 'interfaces/people'

import { InternalLink } from 'components/common/link/internal'
import {
  ItemLayout,
  ItemLayoutHeader,
  ItemLayoutFooter,
} from 'components/common/items-list/item-layout'
import { DetailsTable } from 'components/common/details-table'
import { FavoriteButton } from 'components/common/favorite-button'

export interface PersonPropsI {
  item: PersonI
}

function Person(props: PersonPropsI) {
  const { item } = props

  const details = {
    Gender: item.gender,
    'Birth year': item.birth_year,
    'Starships count': item.starships.length,
    'Vehicles count': item.vehicles.length,
    'Films count': item.films.length,
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

export { Person }
