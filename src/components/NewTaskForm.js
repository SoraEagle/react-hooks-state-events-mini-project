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

  // console.log("categories has been passed down to NewTaskForm");
  return(
    <form className="new-task-form"> {/* Add onSubmit={addTask} */}
      <label>
        Details
        <input type="text" name="text" onChange={onDetails} value={details} /> {/*  */}
      </label>
      <label>
        Category
        <select name="category" onChange={onCategories} value={asCategory} > {/* Turn into controlled input */}
          {/* render <option> elements for each category here */}
          {taskCategory.map((ctgry) => ( //Use an alias reference to access the taskCategory indexes.
            <option key={`key.${categories}`}>{ctgry}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;