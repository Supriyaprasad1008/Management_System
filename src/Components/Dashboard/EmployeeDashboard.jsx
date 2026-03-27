import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-400 to-purple-900 p-6 md:p-10">
     
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
