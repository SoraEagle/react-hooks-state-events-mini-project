import React from "react";

function Task({tasks}){
  // console.log("tasks has been passed down to Task");
  return(
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;