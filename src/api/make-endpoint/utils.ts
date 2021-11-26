import Dictionary from 'interfaces/utils'

function composeUrl(...parts: (string | number)[]) {
  return parts.join('')
}

function makeRequest<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      return response.json().then(js => Promise.reject(js))
    }

    return response.json()
  })
}

function composeQueryString(props: Dictionary<string>) {
  return new URLSearchParams(props).toString()
}

export { composeUrl, composeQueryString, makeRequest }
