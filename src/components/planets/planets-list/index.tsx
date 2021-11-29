import { PlanetI } from 'interfaces/planets'

import { ItemsList } from 'components/common/items-list'
import { Planet } from './planet'

export interface PlanetsListPropsI {
  entities: PlanetI[]
}

function PlanetsList(props: PlanetsListPropsI) {
  const { entities } = props

  return <ItemsList items={entities} Item={Planet} title="Planets:" />
}

export { PlanetsList }
