function get<T>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key)

  return value !== null ? JSON.parse(value) : defaultValue
}

function set<T>(key: string, value: T) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export { get, set }
