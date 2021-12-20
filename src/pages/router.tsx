import { RouteNames, routesMap } from './routes'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { NotFound } from './system/NotFound'

import { Vehicles as VehiclesPage } from './vehicles/vehicles'
import { Vehicle as VehiclePage } from './vehicles/vehicle'

import { People as PeoplePage } from './people/people'
import { Person as PersonPage } from './people/person'

import { Films as FilmsPage } from './films/films'
import { Film as FilmPage } from './films/film'

import { Planets as PlanetsPage } from './planets/planets'
import { Planet as PlanetPage } from './planets/planet'

const routesPages = {
  [RouteNames.films]: FilmsPage,
  [RouteNames.film]: FilmPage,

  [RouteNames.vehicles]: VehiclesPage,
  [RouteNames.vehicle]: VehiclePage,

  [RouteNames.people]: PeoplePage,
  [RouteNames.person]: PersonPage,

  [RouteNames.planets]: PlanetsPage,
  [RouteNames.planet]: PlanetPage,
}

function Router() {
  const routeNames = Object.keys(routesMap) as unknown as RouteNames[]

  console.log('process.env', process.env)

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME_URL}>
      <Routes>
        {routeNames.map(routeName => {
          const Page = routesPages[routeName]
          const { path } = routesMap[routeName]

          return <Route key={path} path={path} element={<Page />} />
        })}
        <Route
          path="/"
          element={<Navigate replace to={routesMap[RouteNames.films].path} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
