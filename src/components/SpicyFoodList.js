import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);
    const [filterBy, setFilterBy] = useState("All");

    function handleAddFood() {
      const newFood = getNewRandomSpicyFood();
      console.log(newFood);
      const newFoodArray = [...foods, newFood];
      setFoods(newFoodArray);
  }
// Removing elements from arrays in State.
  // function handleLiClick(id) {
  // const newFoodArray = foods.filter((food) => food.id !== id);
  // setFoods(newFoodArray);
   // to look for all foods except the number we are trying to remove
  //   // [1, 2, 3].filter((number) => number !== 3);
  // }
  // Updating Elements in Arrays in State
      function handleLiClick(id) {
      const newFoodArray = foods.map((food) => {
        if (food.id === id) {
          return {
          ...food,
          heatLevel: food.heatLevel + 1,
          };
        } else {
          return food;
        }
      });
      setFoods(newFoodArray);
    }
  
  // // Add a click handler to <li> elements, and pass in id of the food we are trying to remove. set the cursor on top of list and click to remove.
  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
   
  // ));
    function handleFilterChange(event) {
      setFilterBy(event.target.value);
    }
    const foodsToDisplay = foods.filter((food) => {
      if (filterBy === "All") {
      return true;
      } else {
      return food.cuisine === filterBy;
      }
    });

    const foodList = foodsToDisplay.map((food) => (
      <li key={food.id} onClick={() => handleLiClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
      ));

return (
  <div>
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
    <button onClick={handleAddFood}>Add New Food</button>
      <ul>{/* list of spicy foods */}</ul>
      <ul>{foodList}</ul>
  </div>
  );
} 
export default SpicyFoodList;

// ### Array Cheat Sheet

// Here's a quick reference of some common techniques for manipulating arrays in
// state. Keep this in mind, because working with arrays will be important as a
// React developer!

// - **Add**: use the spread operator (`[...]`)
// - **Remove**: use `.filter`
// - **Update**: use `.map`