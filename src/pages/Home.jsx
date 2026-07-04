import FoodCard from '../components/FoodCard';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function Home() {
    const[searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const foods = [
        {id: 1, name: "Pasta", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 2, name: "Bananas", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 3, name: "Bologonese", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 4, name: "Cake", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 5, name: "Columbian", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 6, name: "Chinese Chicken", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 7, name: "KBBQ", sweet: "1", spice: "2", salty: "3", url: ""},
        {id: 8, name: "Chicken", sweet: "1", spice: "2", salty: "3", url: ""}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
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
                    
                    food.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<FoodCard food={food} key={food.id}/>)
                ))}
            </div>
        </div>
    );
}

export default Home