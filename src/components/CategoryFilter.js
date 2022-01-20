import React, {useState} from "react";

function CategoryFilter({categories}){
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add a function to change a button's class to "selected", while removing the class from all other buttons
  
  // console.log("categories has been passed down to CategoryFilter");
  return(
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => 
    <button 
    key={category}> {/* Add onClick event */}
      {category}
    </button>
  )}
    </div>
  );
}

export default CategoryFilter;