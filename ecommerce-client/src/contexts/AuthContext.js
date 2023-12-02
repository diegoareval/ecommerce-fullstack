import { createContext, useState, useEffect } from 'react'
import { tokenInstance, userInstance } from '@/api'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initProcess()
  }, [])

  const initProcess = async () => {
    const token = tokenInstance.getToken()
    if (!token) {
      logout()
      setLoading(false)
      return
    } else {
      if (tokenInstance.hasExpired(token)) {
        logout()
        setLoading(false)
      } else {
        login(token)
      }
    }
  }

  const logout = () => {
    tokenInstance.removeToken();
    setToken(null)
    setUser(null)
  }

  const login = async (token) => {
    try {
      tokenInstance.setToken(token)
      setToken(token)
      const userResult = await userInstance.getMe()
      console.log('userResult', userResult)
      setUser(userResult)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const updateUser = (key, value)=> {
     setUser({...user, [key]: value})
  }

  const data = {
    accessToken: token,
    user,
    login,
    logout: logout,
    updateUser: updateUser,
  }

  if (loading) return null
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
