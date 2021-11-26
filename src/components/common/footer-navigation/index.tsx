import classNames from './footer-navigation.module.css'

import { ReactNode } from 'react'

import { InternalLink } from 'components/common/link/internal'
import { Button } from 'components/common/button'

export interface FooterNavigationPropsI {
  next: string | null
  previous: string | null
}

function LinkOrText(props: { href: string | null; children: ReactNode }) {
  const { href, children } = props

  return href ? (
    <InternalLink to={href}>
      <Button>{children}</Button>
    </InternalLink>
  ) : (
    <Button disabled>{children}</Button>
  )
}

function FooterNavigation(props: FooterNavigationPropsI) {
  const { next, previous } = props

  return (
    <footer className={classNames.footerNavigation}>
      <LinkOrText href={previous}>Previous</LinkOrText>
      <span className={classNames.delimiter}>|</span>
      <LinkOrText href={next}>Next</LinkOrText>
    </footer>
  )
}

export { FooterNavigation }
