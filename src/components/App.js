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

  function onTaskFormSubmit(newTask){
    setTaskCatalog([...taskCatalog, newTask]);
  }

  // Make a delete function
  function handleDeleteTask(taskToDelete){ //Function to delete a task if it's Delete Button is pressed.
    console.log(taskToDelete);
    setTaskCatalog(taskCatalog.filter((task) => task.text !== taskToDelete ));
  }

  const tasksToDisplay = taskCatalog.filter((task) => {
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
      onTaskFormSubmit={onTaskFormSubmit} />

      <TaskList 
      tasks={tasksToDisplay} 
      taskCatalog={taskCatalog}
      handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;