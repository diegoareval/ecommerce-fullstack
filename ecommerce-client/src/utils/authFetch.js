import { tokenInstance } from '@/api'

export async function authFetch(url, params = {}) {
  const token = tokenInstance.getToken()

  const logout = ()=> {
    tokenInstance.removeToken();
    window.location.replace('/')
  }
  if (!token) {
    logout()
  } else {
    if (tokenInstance.hasExpired(token)) {
        logout()
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      }
      try {
        return fetch(url, paramsTemp)
      } catch (error) {
        return error
      }
    }
  }
}
