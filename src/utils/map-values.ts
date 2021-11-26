import Dictionary from '../interfaces/utils'

function mapValues<T, R>(
  map: Dictionary<T>,
  iterate: (value: T, key: string) => R
) {
  const result: Dictionary<R> = {}

  for (let key in map) {
    result[key] = iterate(map[key], key)
  }

  return result
}

export { mapValues }
