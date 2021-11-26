import { FilmI } from 'interfaces/films'

import { ItemsList } from 'components/common/items-list'
import { Film } from './film'

export interface FilmsListPropsI {
  entities: FilmI[]
}

function FilmsList(props: FilmsListPropsI) {
  const { entities } = props

  return <ItemsList items={entities} Item={Film} title="Films:" />
}

export { FilmsList }
