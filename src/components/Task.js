import React from "react";

function Task({handleDeleteTask, category, text}){
  return(
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      onClick={() => {handleDeleteTask(text)}} //onClick, delete the selected task
      className="delete">X</button>
    </div>
  );
}

export default Task;