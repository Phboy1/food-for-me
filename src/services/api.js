const API_KEY = "1"; 
const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;

export const searchMeals = async (query) => {
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.meals;
};

export const getMealById = async (id) => {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
};

export const getRandomMeal = async () => {
    const response = await fetch(`${BASE_URL}/random.php`);
    const data = await response.json();
    return data.meals[0];
};
