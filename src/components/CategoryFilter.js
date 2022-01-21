import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}){

  const categoryButtons = categories.map((category) => (
    <button 
    className={(category === selectedCategory ? "selected" : null)}
    key={category}
    onClick={() => setSelectedCategory(category)} > {/* Create a callback function for this; Set current category */}
      {category}
    </button>
      ));

  return(
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements (with unique keys) with onClick={} for each category HERE. */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;