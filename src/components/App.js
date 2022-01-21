import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {CATEGORIES, TASKS} from "../data";
console.log("Here's the data you're working with");
console.log({CATEGORIES, TASKS});

function App(){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskCatalog, setTaskCatalog] = useState(TASKS);

  const [details, setDetails] = useState("");
  const [asCategory, setAsCategory] = useState("Code");

  const newTask= {
    text: details,
    category: asCategory,
  }

  const taskArray = [...TASKS];
  
  function onTaskFormSubmit(newTask){
    taskArray.push(newTask);
    setTaskCatalog(taskArray);
  }

  const tasksToDisplay = taskCatalog.filter((task) => {
    // if(category === "All") return true;
     return selectedCategory === "All" || task.category === selectedCategory;
  });

  return(
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
      taskCatalog={taskCatalog} />

      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={onTaskFormSubmit}
      details={details}
      setDetails={setDetails}
      asCategory={asCategory}
      setAsCategory={setAsCategory}
      newTask={newTask} />

      <TaskList tasks={tasksToDisplay} taskArray={taskArray} taskCatalog={taskCatalog} />
    </div>
  );
}

export default App;