import React from "react";
import Task from "./Task";

function TaskList({tasks}){
  // 
  return(
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {/* Update later to use an Array created with the spread operator */}
      {tasks.map((task) => ( //Using an alias reference to access the 
    <Task key={task.text}  />
  ))}
    </div>
  );
}

export default TaskList;