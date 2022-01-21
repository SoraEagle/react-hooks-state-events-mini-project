import React from "react";
import Task from "./Task";

function TaskList({tasks, taskArray, taskCatalog}){
  return(
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {/* Update later to use an Array created with the spread operator */}
      {tasks.map((task) => ( //Using an alias reference to access the task data.
    <Task key={task.text} tasks={tasks} category={task.category} text={task.text} taskArray={taskArray} />
  ))}
    </div>
  );
}

export default TaskList;