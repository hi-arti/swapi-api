import { useEffect } from 'react'
import { films, vehicles, people, planets } from 'store'

import { InternalLink } from 'components/common/link/internal'

const sections = {
  films: { resource: films, labelKey: 'title' },
  vehicles: { resource: vehicles, labelKey: 'name' },
  people: { resource: people, labelKey: 'name' },
  planets: { resource: planets, labelKey: 'name' },
}

export interface EntityRelationLinkPropsI {
  url: string
  resourceName: keyof typeof sections
}

function EntityRelationLink(props: EntityRelationLinkPropsI) {
  const { url, resourceName } = props

  const { resource, labelKey } = sections[resourceName]

  useEffect(() => {
    resource.actions.loadEntityIfNeeded(url)
  }, [url])

  const status = resource.store.usePickState(
    state => state.statuses[url],
    [url]
  )

  const entity = resource.store.usePickState(
    state => state.resources[url],
    [url]
  )

  if (!status?.loaded) {
    return <span>Loading...</span>
  }

  if (status?.error) {
    return <span>Error: {status?.error}</span>
  }

  // TODO: find another way to pick right type
  const title = entity[labelKey as keyof typeof entity] || '-- || --'

  return <InternalLink to={url}>{title}</InternalLink>
}

export { EntityRelationLink }
