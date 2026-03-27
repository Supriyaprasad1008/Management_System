import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const AllTask = () => {
  const [userData] = useContext(AuthContext)
  const employees = userData?.employees ?? []

  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">Team Task Overview</h2>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-100">
          {employees.length} Employees
        </span>
      </div>

      <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-sky-100 md:grid md:grid-cols-5">
        <p>Employee Name</p>
        <p className="text-center">New Task</p>
        <p className="text-center">Active Task</p>
        <p className="text-center">Completed</p>
        <p className="text-center">Failed</p>
      </div>

      <div className="mt-3 space-y-3">
        {employees.map((elem) => (
          <div
            key={elem.id}
            className="rounded-xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 px-4 py-3 text-white shadow-md"
          >
            <div className="md:hidden">
              <p className="mb-2 text-base font-semibold">{elem.firstname}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="rounded bg-sky-500/10 px-2 py-1">New: <span className="font-bold text-sky-200">{elem.taskCount?.newTask ?? 0}</span></p>
                <p className="rounded bg-yellow-500/10 px-2 py-1">Active: <span className="font-bold text-yellow-200">{elem.taskCount?.active ?? 0}</span></p>
                <p className="rounded bg-emerald-500/10 px-2 py-1">Done: <span className="font-bold text-emerald-200">{elem.taskCount?.completed ?? 0}</span></p>
                <p className="rounded bg-rose-500/10 px-2 py-1">Failed: <span className="font-bold text-rose-200">{elem.taskCount?.failed ?? 0}</span></p>
              </div>
            </div>

            <div className="hidden items-center md:grid md:grid-cols-5">
              <p className="text-base font-semibold">{elem.firstname}</p>
              <p className="text-center font-semibold text-sky-200">{elem.taskCount?.newTask ?? 0}</p>
              <p className="text-center font-semibold text-yellow-200">{elem.taskCount?.active ?? 0}</p>
              <p className="text-center font-semibold text-emerald-200">{elem.taskCount?.completed ?? 0}</p>
              <p className="text-center font-semibold text-rose-200">{elem.taskCount?.failed ?? 0}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllTask
