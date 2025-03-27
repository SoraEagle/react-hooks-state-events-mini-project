import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {CATEGORIES, TASKS} from "../data";

function App(){
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleAddTask(newTask){
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete){
    setTasks(tasks.filter((task) => task.text !== taskToDelete ));
  }

  const tasksToDisplay = tasks.filter((task) => {
     return category === "All" || task.category === category;
  });

  return(
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category} 
        onSelectedCategory={setCategory}
      />
      <h5>Tasks</h5>
      <NewTaskForm 
        categories={CATEGORIES.filter((cat) => cat !== "All")} 
        onTaskFormSubmit={handleAddTask} 
      />
      <TaskList 
        tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;