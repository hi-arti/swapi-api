import { makeActions } from './common/make-actions'
import { makeResourceStore } from './common/make-resource-store'

import { FilmI } from 'interfaces/films'

import { filmsApi } from 'api/resources'

const store = makeResourceStore<FilmI>()
const actions = makeActions(filmsApi, store)

export default {
  store,
  actions,
}
