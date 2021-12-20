enum RouteNames {
  films = 'films',
  film = 'film',

  vehicles = 'vehicles',
  vehicle = 'vehicle',

  people = 'people',
  person = 'person',

  planets = 'planets',
  planet = 'planet',
}

const routesMap = {
  [RouteNames.films]: { path: '/films' },
  [RouteNames.film]: { path: '/films/:id' },
  [RouteNames.vehicle]: { path: '/vehicles/:id' },
  [RouteNames.vehicles]: { path: '/vehicles' },
  [RouteNames.vehicle]: { path: '/vehicles/:id' },
  [RouteNames.people]: { path: '/people' },
  [RouteNames.person]: { path: '/people/:id' },
  [RouteNames.planets]: { path: '/planets' },
  [RouteNames.planet]: { path: '/planets/:id' },
}

export { RouteNames, routesMap }
