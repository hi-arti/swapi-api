import { makeActions } from './common/make-actions'
import { makeResourceStore } from './common/make-resource-store'

import { PersonI } from 'interfaces/people'

import { peopleApi } from 'api/resources'

const store = makeResourceStore<PersonI>()
const actions = makeActions(peopleApi, store)

export default {
  store,
  actions,
}
