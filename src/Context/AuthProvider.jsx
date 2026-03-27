import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const { employees, admins } = getLocalStorage()

    if (!employees || !admins) {
      setLocalStorage()
      return getLocalStorage()
    }

    return { employees, admins }
  })

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
