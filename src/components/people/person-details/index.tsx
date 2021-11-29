import { PersonI } from 'interfaces/people'

import { Flex } from 'components/common/flex'
import { FavoriteButton } from 'components/common/favorite-button'
import { DetailsTable } from 'components/common/details-table'
import { RelationsLinks } from 'components/common/relations-links'
import { EntityRelationLink } from 'components/common/entity-relation-link'

export interface PersonDetailsPropsI {
  entity: PersonI
}

function PersonDetails(props: PersonDetailsPropsI) {
  const { entity } = props

  const details = {
    Gender: entity.gender,
    'Birth year': entity.birth_year,
    'Eye color': entity.eye_color,
    'Hair color': entity.hair_color,
    Height: entity.height,
    'Home world': entity.homeworld,
    Mass: entity.mass,
  }

  return (
    <article>
      <Flex as="header">
        <h1>{entity.name}</h1>
        <FavoriteButton url={entity.url} />
      </Flex>
      <div>
        Home worlds:{' '}
        <EntityRelationLink url={entity.homeworld} resourceName="planets" />
      </div>
      <DetailsTable details={details} />
      <RelationsLinks
        title="Films:"
        relationType="films"
        relationUrls={entity.films}
      />
      <RelationsLinks
        title="Vehicles:"
        relationType="vehicles"
        relationUrls={entity.vehicles}
      />
    </article>
  )
}

export { PersonDetails }
