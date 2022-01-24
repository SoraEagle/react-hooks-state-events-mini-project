import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteTask}){
  return(
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => ( //Using an alias reference to access the task data.
    <Task key={task.text} 
    tasks={tasks} 
    category={task.category} 
    text={task.text} 
    task={task}
    handleDeleteTask={handleDeleteTask} />
  ))}
    </div>
  );
}

export default TaskList;