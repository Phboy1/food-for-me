import { useNavigate } from "react-router-dom"
import { useFoodContext } from "../contexts/FoodContext"
import FoodCard from "../components/FoodCard"

function Favourites() {
    const navigate = useNavigate();
    const {favourites} = useFoodContext();

    if (favourites.length > 0) {
        return (
            <>
            <div>Your Favourite Movies!</div>
            <div className="food-grid">
                {favourites.map((food) => (
                    <FoodCard food={food} key={food.id}/>
                ))}
            </div>
            </>
        )
    }
    
    return (
        <main>
            <button type="button" onClick={() => navigate("/")}>Head back to home!</button>
            <h3>Currently, you do not have any favourites</h3>
        </main>
    )
}

export default Favourites