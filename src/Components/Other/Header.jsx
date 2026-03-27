import React from 'react'


const Header = ({ data, handleLogout }) => {
  const onLogout = () => {
    localStorage.removeItem('loggedInUser')

    if (typeof handleLogout === 'function') {
      handleLogout()
      return
    }

    window.location.reload()
  }

  return (
    <div className='flex items-start justify-between w-full text-white text-xl font-serif'>
      <h1>Hello {data?.firstname || 'Employee'}</h1>
      <button className='bg-orange-500 py-4 px-8' onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Header
