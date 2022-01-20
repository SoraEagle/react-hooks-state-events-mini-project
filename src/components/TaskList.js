import React from "react";
import Task from "./Task";

function TaskList({tasks}){
  // console.log("tasks has been passed down to TaskList");
  const listTasks = tasks.map((task) => (
    <Task key={task}  />
  ));
  return(
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {/* Update later to use an Array created with the spread operator */}
      {listTasks}
    </div>
  );
}

export default TaskList;