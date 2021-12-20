function concatToPublicPath(path: string) {
  if (!process.env.RELATIVE_PATH) {
    return path
  }

  return [process.env.RELATIVE_PATH, path].join('')
}

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
  [RouteNames.films]: { path: concatToPublicPath('/films') },
  [RouteNames.film]: { path: concatToPublicPath('/films/:id') },
  [RouteNames.vehicle]: { path: concatToPublicPath('/vehicles/:id') },
  [RouteNames.vehicles]: { path: concatToPublicPath('/vehicles') },
  [RouteNames.vehicle]: { path: concatToPublicPath('/vehicles/:id') },
  [RouteNames.people]: { path: concatToPublicPath('/people') },
  [RouteNames.person]: { path: concatToPublicPath('/people/:id') },
  [RouteNames.planets]: { path: concatToPublicPath('/planets') },
  [RouteNames.planet]: { path: concatToPublicPath('/planets/:id') },
}

export { RouteNames, routesMap }
