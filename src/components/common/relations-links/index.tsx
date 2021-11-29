import classNames from './relations-links.module.css'

import {
  EntityRelationLink,
  EntityRelationLinkPropsI,
} from '../entity-relation-link'

export interface RelationsLinksPropsI {
  title: string
  relationUrls: string[]
  relationType: EntityRelationLinkPropsI['resourceName']
}

function RelationsLinks(props: RelationsLinksPropsI) {
  const { title, relationUrls, relationType } = props

  return (
    <article>
      <header>
        <h3>{title}</h3>
      </header>
      <ul className={classNames.relationsLinksItems}>
        {relationUrls.map(url => {
          return (
            <li key={url} className={classNames.relationsLinksItem}>
              <EntityRelationLink url={url} resourceName={relationType} />
            </li>
          )
        })}
        {!relationUrls.length && <li>¯\_(ツ)_/¯</li>}
      </ul>
    </article>
  )
}

export { RelationsLinks }
