import React, { use, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = ({ mealsPromise }) => {
  const mealsData = use(mealsPromise);
  const meals = mealsData.meals;

  const [selectedMeal, setSelectedMeal] = useState([]);

  const handleSelectedMeal = (meal) => {
    const exists = selectedMeal.some((m) => m.strMeal === meal.strMeal);

    if (!exists) {
      setSelectedMeal([...selectedMeal, meal]);
    } else {
      const removeMeal = selectedMeal.filter((m) => m.idMeal !== meal.idMeal);
      setSelectedMeal(removeMeal);
    }
  };
  return (
    <div>
      <h2>Get your meal</h2>
      <h4>Selected Items: {selectedMeal.length}</h4>
      <ol>
        {selectedMeal.map((meal, index) => (
          <li key={index}>{meal.strMeal}</li>
        ))}
      </ol>
      <div className="meals">
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            meal={meal}
            handleSelectedMeal={handleSelectedMeal}
          ></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
