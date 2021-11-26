import { useEffect } from 'react'
import { films, vehicles, people } from 'store'

import { InternalLink } from 'components/common/link/internal'

const apiProvidersBySection = {
  films,
  vehicles,
  people,
}

export interface EntityRelationLinkPropsI {
  url: string
  resourceName: keyof typeof apiProvidersBySection
  labelKey: string
}

function EntityRelationLink(props: EntityRelationLinkPropsI) {
  const { url, labelKey, resourceName } = props

  const resource = apiProvidersBySection[resourceName]

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
