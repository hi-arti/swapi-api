enum RouteNames {
  films = 'films',
  film = 'film',

  vehicles = 'vehicles',
  vehicle = 'vehicle',

  people = 'people',
  person = 'person',
}

const routesMap = {
  [RouteNames.films]: {
    path: '/films',
  },
  [RouteNames.film]: {
    path: '/films/:id',
  },
  [RouteNames.vehicle]: {
    path: '/vehicles/:id',
  },
  [RouteNames.vehicles]: {
    path: '/vehicles',
  },
  [RouteNames.vehicle]: {
    path: '/vehicles/:id',
  },
  [RouteNames.people]: {
    path: '/people',
  },
  [RouteNames.person]: {
    path: '/people/:id',
  },
}

export { RouteNames, routesMap }
