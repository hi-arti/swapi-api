import { useLocation } from 'react-router-dom'

function useCurrentPath(): string {
  const location = useLocation()

  return [location.pathname, location.search].join('')
}

export { useCurrentPath, useLocation }
