import { PersonI } from 'interfaces/people'

import { ItemsList } from 'components/common/items-list'
import { Person } from './person'

export interface PeopleListPropsI {
  people: PersonI[]
}

function PeopleList(props: PeopleListPropsI) {
  const { people } = props

  return <ItemsList items={people} Item={Person} title="People:" />
}

export { PeopleList }
