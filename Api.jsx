export const getFullApi = () => {
  const responce = fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  ).then((res) => res.json());

  return responce;

  
};

export const getCategoryApi = () => {
  const responce = fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  ).then((res) => res.json());

  return responce;
}

export const getMealRecipe = (idMeal) => {
  const responce = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  ).then((res) => res.json());

  return responce;
}