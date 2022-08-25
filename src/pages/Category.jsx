import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredByCategory } from "../api";
import { Preloader } from "../Components/Preloader";
import { MealList } from "../Components/MealList";
export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredByCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}
