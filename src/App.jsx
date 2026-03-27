import React, { useContext, useState } from 'react'
import LoginPage from './Components/Auth/LoginPage'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthContext'

const App = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const [user, setUser] = useState(loggedInUser?.role ?? null)
  const [loggedInUserData, setLoggedInUserData] = useState(loggedInUser?.data ?? null)

  const [userData] = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
      } else {
        alert('Invalid Credentials')
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setLoggedInUserData(null)
    setUser(null)
  }

  return (
    <>
      {!user && <LoginPage handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard handleLogout={handleLogout} />}

      {user === 'employee' && (
        <EmployeeDashboard
          handleLogout={handleLogout}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App
