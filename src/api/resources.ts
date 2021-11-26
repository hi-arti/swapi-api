import { makeApiEndpoint } from './make-endpoint'

import { VehicleI } from 'interfaces/vehicles'
import { PersonI } from 'interfaces/people'
import { FilmI } from 'interfaces/films'

export const filmsApi = makeApiEndpoint<FilmI>([
  'characters',
  'planets',
  'starships',
  'vehicles',
  'species',
])
export const vehiclesApi = makeApiEndpoint<VehicleI>(['pilots', 'films', 'url'])
export const peopleApi = makeApiEndpoint<PersonI>([
  'films',
  'species',
  'vehicles',
  'starships',
  'homeworld',
  'url',
])
