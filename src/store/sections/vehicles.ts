import { makeActions } from './common/make-actions'
import { makeResourceStore } from './common/make-resource-store'

import { VehicleI } from 'interfaces/vehicles'

import { vehiclesApi } from 'api/resources'

const store = makeResourceStore<VehicleI>()
const actions = makeActions(vehiclesApi, store)

export default {
  store,
  actions,
}
