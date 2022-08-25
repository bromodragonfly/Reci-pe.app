import { API_UPL } from "./config";

const getMealById = async (mealId) => {
  const result = await fetch(API_UPL + "lookup.php?i=" + mealId);
  return await result.json();
};

const getAllCategories = async () => {
  const result = await fetch(API_UPL + "categories.php");
  return await result.json();
};

const getFilteredByCategory = async (categoryName) => {
  const result = await fetch(API_UPL + "filter.php?c=" + categoryName);
  return await result.json();
};

export { getMealById, getAllCategories, getFilteredByCategory };
