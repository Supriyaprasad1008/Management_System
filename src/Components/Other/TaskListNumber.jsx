import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      
      <div className="rounded-xl bg-gradient-to-br from-red-600 via-red-400 to-red-900 px-8 py-5 shadow-lg">
        
        <h2 className="font-bold text-lg text-white">NewContract</h2>
        <h2 className="font-bold text-2xl text-white">{data.taskCount.active}</h2>

      </div>
      <div className="rounded-xl bg-gradient-to-br from-orange-600 via-orange-400 to-orange-900 px-8 py-5 shadow-lg">
        
        <h2 className="font-bold text-lg text-white">New Task</h2>
        <h2 className="font-bold text-2xl text-white">{data.taskCount.newTask}</h2>

      </div>
      <div className="rounded-xl bg-gradient-to-br from-green-600 via-green-400 to-green-900 px-8 py-5 shadow-lg">
        
        <h2 className="font-bold text-lg text-white">Completed</h2>
        <h2 className="font-bold text-2xl text-white">{data.taskCount.completed}</h2>

      </div>
      <div className="rounded-xl bg-gradient-to-br from-blue-600 via-blue-400 to-blue-900 px-8 py-5 shadow-lg">
        
        <h2 className="font-bold text-lg text-white">Failed</h2>
        <h2 className="font-bold text-2xl text-white">{data.taskCount.failed}</h2>

      </div>

    </div>
  )
}

export default TaskListNumber
