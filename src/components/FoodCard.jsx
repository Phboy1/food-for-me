import { useFoodContext } from "../contexts/FoodContext"

function FoodCard({food}) {
    const {favourites, isFavourite, addToFavourites, removeFromFavourites} = useFoodContext()

    const favourite = isFavourite(food.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(food.id)
        else addToFavourites(food);
    }

    return (
        <>
            <div className="food-card">
                <div className="photo-image">
                    <img src={food.url} alt={food.name} />
                </div>
                <div className="food-overlay">
                    <button className={`favourite-btn${favourite ? " favourited" : ""}`} onClick={onFavouriteClick}>
                     {favourite ? "♥" : "♡"}
                    </button>
                </div>
                <div className="food-info">
                    <h3>{food.name}</h3>
                    <p>{food.category}</p>
                    <p>{food.area}</p>
                </div>
            </div>
        </>
    )
}

export default FoodCard