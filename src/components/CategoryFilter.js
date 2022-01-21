import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}){
  return(
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements (with unique keys) with onClick={} for each category HERE. */}
      {categories.map((category) => (
    <button 
    className={(category === selectedCategory ? "selected" : null)}
    key={category}
    onClick={() => setSelectedCategory(category)} > {/* Create a callback function for this; Set current category */}
      {category}
    </button>
      ))}
    </div>
  );
}

export default CategoryFilter;