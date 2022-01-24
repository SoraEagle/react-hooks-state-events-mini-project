import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}){

  const categoryButtons = categories.map((category) => (
    <button 
    className={(category === selectedCategory ? "selected" : null)}
    key={category}
    onClick={() => setSelectedCategory(category)} > {/* Set the current category */}
      {category}
    </button>
      ));

  return(
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons} {/* renders <button> elements (with unique keys) with onClick={} for each category. */}
    </div>
  );
}

export default CategoryFilter;