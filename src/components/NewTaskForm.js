import React, {useState} from "react";

function NewTaskForm({categories}){
  const [details, setDetails] = useState("");
  const [asCategory, setAsCategory] = useState("Code");

  const taskCategory = [...categories]; //Array used for creating new tasks.
  taskCategory.shift();
  console.log("The original categories array: " + categories); //The original categories Array.
  console.log("Array used for the newTaskForm: " + taskCategory); //Array used for the NewTaskForm component.

  function onDetails(event){
    setDetails(event.target.value);
  }

  function onCategories(event){
    setAsCategory(taskCategory);
  }
  
  function addTask(event){ //Function called to submit new task and reset the task form
    event.preventDefault();
    // onTaskFormSubmit(); //Callback function that is yet to be created
    setDetails("");
    setAsCategory("Code");
  }

  return(
    <form className="new-task-form" onSubmit={addTask} > {/* finish the addTask function!!! */}
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