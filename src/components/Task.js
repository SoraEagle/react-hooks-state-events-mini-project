import React from "react";

function Task({tasks, task, category, text}){
  // find indexOf of the task
  // let taskIndex = taskArray.indexOf(task, task); //This will only track the single element!!!
  return(
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      // onClick={delete taskArray[taskIndex]}
      className="delete">X</button>
    </div>
  );
}

export default Task;