import FoodCard from '../components/FoodCard';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { searchMeals } from '../services/api';
import { useFoodContext } from '../contexts/FoodContext';

function Home() {
    const[searchQuery, setSearchQuery] = useState("");
    const[foods, setFoods] = useState([]);
    const navigate = useNavigate();
    const {getRatingInfo} = useFoodContext()
    const [sortBy, setSortBy] = useState("none")

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

    function getSorted(list)
    {
        const sorted = [...list]
        if (sortBy === "rating-desc")
        {
            return sorted.sort((a, b) => getRatingInfo(b.id).rating - getRatingInfo(a.id).rating)
        }
        else if (sortBy === "rating-asc")
        {
            return sorted.sort((a, b) => getRatingInfo(a.id).rating - getRatingInfo(b.id).rating)
        }
        else if (sortBy === "tried")
        {
            return sorted.filter(f => getRatingInfo(f.id).status === "tried")
        }
        else if (sortBy === "not-tried")
        {
            return sorted.filter(f => getRatingInfo(f.id).status !== "tried")
        }
        else
        {
            return sorted
        }
    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for foods" className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type='submit' className='search-button'>Search</button>
            </form>

            <button type='button' className='search-button' onClick={() => navigate("/favourites")}>Go to Favourites</button>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="none">Default</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="rating-asc">Lowest Rated</option>
                <option value="tried">Tried</option>
                <option value="not-tried">Not Tried</option>
            </select>
            <div className="food-grid">
                {getSorted(foods).map((food) => (
                    (food.name.toLowerCase().startsWith(searchQuery.toLowerCase())) && <FoodCard food={food} key={food.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home