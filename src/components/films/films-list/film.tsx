import { FilmI } from 'interfaces/films'

import { InternalLink } from 'components/common/link/internal'
import {
  ItemLayout,
  ItemLayoutHeader,
  ItemLayoutFooter,
} from 'components/common/items-list/item-layout'
import { DetailsTable } from 'components/common/details-table'
import { FavoriteButton } from 'components/common/favorite-button'

export interface PersonPropsI {
  item: FilmI
}

function Film(props: PersonPropsI) {
  const { item } = props

  const details = {
    Episode: item.episode_id,
    Director: item.director,
    Producer: item.producer,
    'Release date': item.release_date,
  }

  return (
    <ItemLayout>
      <ItemLayoutHeader title={item.title} />
      <DetailsTable details={details} />
      <ItemLayoutFooter>
        <InternalLink to={item.url}>Reed more...</InternalLink>
        <FavoriteButton url={item.url} />
      </ItemLayoutFooter>
    </ItemLayout>
  )
}

export { Film }
