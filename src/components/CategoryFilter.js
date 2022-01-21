import React, {useState} from "react";

function CategoryFilter({categories}){
  const [selectedCategory, setSelectedCategory] = useState("All");

  // does the categories[0] ("All") option have to start out with className="selected"?
  // categories[0].className = "selected";

  function onSelectedCategory(event){
    categories.map((category) => {
      category.className=(category === event.target.value ? "selected" : null);
    })
    setSelectedCategory(event.target.value);
  }

  // function (){} // function to change className on all buttons
  // function to filter the tasks

  // Add a function to change a button's class to "selected", while removing the class from all other buttons
  return(
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
    <button 
    className={categories === selectedCategory ? "selected" : null}
    key={category}
    onClick={onSelectedCategory} > {/* Add onClick={} */}
      {category}
    </button>
      ))}
    </div>
  );
}

export default CategoryFilter;