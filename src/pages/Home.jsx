import FoodCard from '../components/FoodCard';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import { searchMeals } from '../services/api';

function Home() {
    const[searchQuery, setSearchQuery] = useState("");
    const[foods, setFoods] = useState([]);
    const navigate = useNavigate();

    const loadMeals = async (name) => {
        const meals = await searchMeals(name);
        if (!meals) {
            setFoods([]);
            return;
        }
        setFoods(meals.map((meal) => ({id: meal.idMeal, name: meal.strMeal, url: meal.strMealThumb, category: meal.strCategory, area: meal.strArea})));
    };

    useEffect(() => {
        loadMeals("");
    }, []);

    const handleSearch = (e) => {
        e.preventDefault()
        loadMeals(searchQuery)
    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for foods" className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type='submit' className='serach-button'>Search</button>
            </form>

            <button type='button' className='search-button' onClick={() => navigate("/favourites")}>Go to Favourites</button>

            <div className="food-grid">
                {foods.map((food) => (
                    (food.name.toLowerCase().startsWith(searchQuery.toLowerCase())) && <FoodCard food={food} key={food.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home