import classNames from './items-list.module.css'

import cn from 'classnames'
import { ReactNode } from 'react'

export interface ItemLayoutPropsI {
  children: ReactNode
  className?: string
}

function ItemLayoutHeader(props: { title: string }) {
  return (
    <header>
      <h3>{props.title}</h3>
    </header>
  )
}
function ItemLayoutFooter(props: { children: ReactNode }) {
  return (
    <footer className={classNames.itemLayoutFooter}>{props.children}</footer>
  )
}

function ItemLayout(props: ItemLayoutPropsI) {
  const { children, className } = props

  const itemClassName = cn(className, classNames.itemLayout)

  return <article className={itemClassName}>{children}</article>
}

export { ItemLayout, ItemLayoutHeader, ItemLayoutFooter }
