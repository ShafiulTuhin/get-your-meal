import "./Meal.css";

const Meal = ({ meal, handleSelectedMeal, selected }) => {
  const handleSelect = () => {
    handleSelectedMeal(meal);
  };
  const { strMeal, strArea, strMealThumb } = meal;
  return (
    <div className={`meal ${selected && "meal-selected"}`}>
      <img src={strMealThumb} alt={strMealThumb} />
      <h3>Name:{strMeal}</h3>
      <h3>Area:{strArea}</h3>
      <p>{selected ? "Selected" : "Not selected"}</p>
      <button onClick={handleSelect} className="btn">
        Select
      </button>
    </div>
  );
};

export default Meal;
