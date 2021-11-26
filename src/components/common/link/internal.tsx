import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export interface InternalLinkPropsI extends LinkProps {
  to: string
  children: ReactNode
}

function InternalLink(props: InternalLinkPropsI) {
  const { to, children, ...restProps } = props

  const url = to ? to.replace('https://swapi.dev/api', '') : ''

  return (
    <Link to={url} {...restProps}>
      {children}
    </Link>
  )
}

export { InternalLink }
