import classNames from './top-menu.module.css'

import { routesMap, RouteNames } from 'pages/routes'

import { InternalLink } from 'components/common/link/internal'

const menuItems = [
  {
    label: 'Films',
    routeName: RouteNames.films,
    path: routesMap[RouteNames.films].path,
  },
  {
    label: 'Vehicles',
    routeName: RouteNames.vehicles,
    path: routesMap[RouteNames.vehicles].path,
  },
  {
    label: 'People',
    routeName: RouteNames.people,
    path: routesMap[RouteNames.people].path,
  },

  {
    label: 'Planets',
    routeName: RouteNames.planets,
    path: routesMap[RouteNames.planets].path,
  },
]

function TopNavigations() {
  return (
    <nav>
      <header className={classNames.topMenuName}>
        <h3>Sections:</h3>
      </header>
      <ul className={classNames.topMenuItems}>
        {menuItems.map(item => {
          return (
            <li key={item.routeName} className={classNames.topMenuItem}>
              <InternalLink
                to={item.path}
                className={classNames.topMenuItemLink}>
                {item.label}
              </InternalLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { TopNavigations }
