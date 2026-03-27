import React, { useContext } from 'react'
import AcceptList from './AcceptList'
import Newtask from './Newtask'
import CompleteList from './CompleteList'
import FailList from './FailList'
import { AuthContext } from '../../Context/AuthContext'

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)
  const currentEmployee = userData?.employees?.find(
    (emp) => emp.firstname === data.firstname
  )
  const tasks = currentEmployee?.tasks ?? data.tasks ?? []

  const handleDeleteTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.firstname !== data.firstname) return emp

      const updatedTasks = emp.tasks.filter((_, i) => i !== taskIndex)

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: {
          newTask: updatedTasks.filter((t) => t.newTask).length,
          active: updatedTasks.filter((t) => t.active).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        },
      }
    })

    localStorage.setItem('employee', JSON.stringify(updatedEmployees))
    setUserData({ ...userData, employees: updatedEmployees })
  }
  return (
    <div id='tasklist' className="mt-8 overflow-y-auto ">
      {tasks.map((elem,idx)=>{
        if(elem.completed){
          return <CompleteList key={idx} data={elem} onDelete={()=>handleDeleteTask(idx)} />
        }
        if(elem.failed){
          return <FailList key={idx} data={elem} onDelete={()=>handleDeleteTask(idx)} />
        }
        if(elem.newTask){
          return <Newtask key={idx} data={elem} onDelete={()=>handleDeleteTask(idx)} />
        }
        if(elem.active){
          return <AcceptList key={idx} data={elem} onDelete={()=>handleDeleteTask(idx)}/>
        }
        else{
          return null

        }
      })}
    </div>
  )
}

export default TaskList
