import { makeActions } from './common/make-actions'
import { makeResourceStore } from './common/make-resource-store'

import { PlanetI } from 'interfaces/planets'

import { planetsApi } from 'api/resources'

const store = makeResourceStore<PlanetI>()
const actions = makeActions(planetsApi, store)

export default {
  store,
  actions,
}
