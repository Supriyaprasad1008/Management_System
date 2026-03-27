import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_35%),linear-gradient(135deg,_#031525_0%,_#07233a_45%,_#0f3c68_100%)] px-4 py-8 text-white md:px-8 lg:px-12">
      
      <Header handleLogout={handleLogout} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
