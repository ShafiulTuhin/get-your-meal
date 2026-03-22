import React, { use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
  const clearFoodItems = () => {
    setSelectedMeal([]);
    if (selectedMeal.length !== 0) {
      toast.success("Order completed Successfully!");
    } else {
      toast.error("Please select meal to make an order");
    }
  };
  return (
    <div className="lg:w-10/12 w-full mx-auto px-3 lg:px-0">
      <h2 className="text-2xl font-bold">Get your meal</h2>
      <h4 className="my-3">
        Selected Items: <span className="font-bold">{selectedMeal.length}</span>
      </h4>
      <ol>
        {selectedMeal.map((meal, index) => (
          <li key={index}>{meal.strMeal}</li>
        ))}
      </ol>
      <button onClick={clearFoodItems} className="btn mt-3">
        Confirm Order
      </button>
      <div className="meals">
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            meal={meal}
            handleSelectedMeal={handleSelectedMeal}
            selected={selectedMeal.some((m) => m.idMeal === meal.idMeal)}
          ></Meal>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Meals;
