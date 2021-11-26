import classNames from './page-layout.module.css'

import { ReactNode } from 'react'

import { TopNavigations } from '../top-menu/top-menu'

export interface PageLayoutPropsI {
  children: ReactNode
}

function PageLayout(props: PageLayoutPropsI) {
  const { children } = props

  return (
    <div className={classNames.pageLayout}>
      <TopNavigations />
      {children}
    </div>
  )
}

export { PageLayout }
