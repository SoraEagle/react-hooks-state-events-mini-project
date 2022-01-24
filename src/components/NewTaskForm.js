import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}){
  const [details, setDetails] = useState("");
  const [asCategory, setAsCategory] = useState("Code");

  const newTask= {
    text: details,
    category: asCategory,
  }

  const taskCategory = [...categories]; //Array used for creating new tasks, without the "All" option.
  taskCategory.shift();

  function onDetails(event){
    setDetails(event.target.value);
  }
  function onCategories(event){
    setAsCategory(event.target.value);
  }
  
  function addTask(event){ //Function called to submit new task and reset the task form.
    event.preventDefault();
    onTaskFormSubmit(newTask); //Callback function in App
    setDetails("");
    setAsCategory("Code");
  }

  return(
    <form className="new-task-form" onSubmit={addTask} >
      <label>
        Details
        <input type="text" name="text" onChange={onDetails} value={details} />
      </label>
      <label>
        Category
        <select name="category" onChange={onCategories} value={asCategory} >
          {taskCategory.map((ctgry) => ( //Uses an alias reference to access the taskCategory indexes.
            <option key={`${ctgry}`}>{ctgry}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;