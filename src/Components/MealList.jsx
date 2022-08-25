import { Meal } from "./Meal";
import { useNavigate } from "react-router-dom";

export function MealList({ meals }) {
  let navigate = useNavigate();

  return (
    <>
      <button className="btn cyan accent-4" onClick={() => navigate(-1)}>
        go back
      </button>
      <div className="list">
        {meals.map((item) => {
          return <Meal key={item.idMeal} {...item} />;
        })}
      </div>
    </>
  );
}
