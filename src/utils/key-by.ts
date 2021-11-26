import Dictionary from '../interfaces/utils'

function keyBy<T extends { [P in keyof T]: T[P] }>(
  arr: T[],
  key: keyof T
): Dictionary<T> {
  const result: Dictionary<T> = {}

  arr.forEach(value => {
    const keyValue = value[key]

    result[keyValue] = value
  })

  return result
}

export { keyBy }
