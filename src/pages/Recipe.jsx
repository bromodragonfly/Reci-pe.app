import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Preloader } from "../Components/Preloader";
export function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  let navigate = useNavigate();
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      {!Object.keys(recipe).length ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((item) => {
                if (item.includes("strIngredient") && recipe[item]) {
                  return (
                    <tr key={item}>
                      <td>{recipe[item]}</td>
                      <td>{recipe[`strMeasure${item.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1rem 0" }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn cyan accent-4" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}
