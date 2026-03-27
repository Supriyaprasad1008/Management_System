import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const CreateTask = () => {
  const[taskTitle,setTaskTitle]=useState('')
  const[taskDescription,setTaskDescription]=useState('')
  const[taskDate,setTaskDate]=useState('')
  const[assignTo,setAssignTo]=useState('')
  const[category,setCategory]=useState('')
  const [userData, setUserData] = useContext(AuthContext)
  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      completed: false,
      newTask: true,
      failed: false
    }

    const employees = userData?.employees ?? []
    const normalizedAssignTo = assignTo.trim().toLowerCase()

    const updatedEmployees = employees.map((employee) => {
      if (employee.firstname?.toLowerCase() !== normalizedAssignTo) {
        return employee
      }

      return {
        ...employee,
        tasks: [...(employee.tasks ?? []), newTask],
        taskCount: {
          ...employee.taskCount,
          newTask: (employee.taskCount?.newTask ?? 0) + 1
        }
      }
    })

    const wasAssigned = updatedEmployees.some(
      (employee) => employee.firstname?.toLowerCase() === normalizedAssignTo
    )

    if (!wasAssigned) {
      alert('Employee not found')
      return
    }

    localStorage.setItem('employee', JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
    setAssignTo("")
    setTaskDate("")
    setTaskDescription("")
    setTaskTitle("")
    setCategory("")
  }
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_35%),linear-gradient(135deg,_#031525_0%,_#07233a_45%,_#0f3c68_100%)] px-4 py-8 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Management Workspace
            </p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Admin Panel</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200/80 md:text-base">
              Assign tasks, track delivery, and keep your team aligned from one
              polished control center.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/30 px-4 py-3 text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Today
              </p>
              <p className="text-lg font-semibold">Focused Workflow</p>
            </div>
            <button className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Publish Update
            </button>
          </div>
        </div>

        

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[30px] border border-cyan-300/15 bg-slate-950/35 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-lg">
                ←
              </div>
              <div>
                <h2 className="text-3xl font-bold">Create Task</h2>
                <p className="text-sm text-slate-300/75">
                  Build and assign work with clarity.
                </p>
              </div>
            </div>

            <form className="grid gap-5" onSubmit={submitHandler}>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-100">
                  Task Title
                </span>
                <input
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  type="text"
                  placeholder="Make a UI design"
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/12"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-100">
                  Description
                </span>
                <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                  rows="5"
                  placeholder="Detailed description of task (Max 500 words)"
                  className="resize-none rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/12"
                ></textarea>
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-100">Date</span>
                  <input
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/12"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-100">
                    Assign To
                  </span>
                  <input
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                    type="text"
                    placeholder="Employee name"
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/12"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-100">
                  Category
                </span>
                <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  placeholder="Design, Development, etc..."
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/12"
                />
              </label>

              <button type="submit" className="mt-3 rounded-2xl bg-cyan-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Create Task
              </button>
            </form>
          </section>

         
        </div>
      </div>
    </div>
  )
}

export default CreateTask
