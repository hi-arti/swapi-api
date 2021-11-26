import classNames from './flex.module.css'

import { ReactNode } from 'react'

export interface FlexPropsI {
  children: ReactNode
  align?: 'center' | 'start'
  wrap?: boolean
  as?: keyof JSX.IntrinsicElements
}

function Flex(props: FlexPropsI) {
  const { children, as: Component = 'div', align = 'center', wrap } = props

  const style = {
    alignItems: align,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  } as const

  return (
    <Component className={classNames.flex} style={style}>
      {children}
    </Component>
  )
}

export { Flex }
