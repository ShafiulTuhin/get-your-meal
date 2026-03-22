import { Suspense, useState } from "react";
import "./App.css";
import Meals from "./components/meals/Meals";
import Navbar from "./components/Nav/Navbar";

const menuData = [
  {
    id: 1,
    path: "/home",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About Us",
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact",
  },
  {
    id: 4,
    path: "/services",
    name: "Services",
  },
];
const fetchMeals = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  const res = await fetch(url);
  return res.json();
};
const mealsPromise = fetchMeals();
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const link = menuData.map((menu) => (
    <a
      href={menu.path}
      key={menu.id}
      className={`px-5 ${
        isMenuOpen
          ? "border-2 border-white-900 rounded-lg text-center px-4 py-1 w-full"
          : "hover:text-purple-600 hover:font-bold"
      }`}
    >
      {menu.name}
    </a>
  ));
  return (
    <>
      <Navbar
        link={link}
        handleMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
      ></Navbar>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Meals mealsPromise={mealsPromise}></Meals>
      </Suspense>
    </>
  );
}

export default App;
