import classNames from './items-list.module.css'
import { ComponentType } from 'react'

export interface ItemsListPropsI<T> {
  title: string
  items: T[]
  Item: ComponentType<{ item: T }>
}

function ItemsList<T>(props: ItemsListPropsI<T>) {
  const { title, items, Item } = props

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <div className={classNames.itemsList}>
        {items.map((item, index) => {
          return <Item key={index} item={item} />
        })}
      </div>
    </section>
  )
}

export { ItemsList }
