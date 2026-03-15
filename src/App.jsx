import { Suspense } from "react";
import "./App.css";
import Meals from "./components/meals/Meals";

const fetchMeals = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  const res = await fetch(url);
  return res.json();
};
const mealsPromise = fetchMeals();
function App() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Meals mealsPromise={mealsPromise}></Meals>
      </Suspense>
    </>
  );
}

export default App;
