import React from "react";

function Task({tasks, taskArray, category, text}){
  return(
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      // onClick={}
      className="delete">X</button>
    </div>
  );
}

export default Task;