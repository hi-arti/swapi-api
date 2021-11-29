import { FilmI } from 'interfaces/films'

import { Flex } from 'components/common/flex'
import { FavoriteButton } from 'components/common/favorite-button'
import { DetailsTable } from 'components/common/details-table'
import { RelationsLinks } from 'components/common/relations-links'

export interface FilmDetailsPropsI {
  entity: FilmI
}

function FilmDetails(props: FilmDetailsPropsI) {
  const { entity } = props

  const details = {
    Director: entity.director,
    Episode: entity.episode_id,
    'Opening crawl': entity.opening_crawl,
    Producer: entity.producer,
    'Release date': entity.release_date,
  }

  return (
    <article>
      <Flex as="header">
        <h1>{entity.title}</h1>
        <FavoriteButton url={entity.url} />
      </Flex>
      <DetailsTable details={details} />
      <Flex wrap align="start">
        <RelationsLinks
          title="Characters:"
          relationType="people"
          relationUrls={entity.characters}
          labelRelationKey="name"
        />
        <RelationsLinks
          title="Vehicles:"
          relationType="vehicles"
          relationUrls={entity.vehicles}
          labelRelationKey="name"
        />
        <RelationsLinks
          title="Planets:"
          relationType="planets"
          relationUrls={entity.planets}
          labelRelationKey="name"
        />
      </Flex>
    </article>
  )
}

export { FilmDetails }
