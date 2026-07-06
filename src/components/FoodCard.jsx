import { useFoodContext } from "../contexts/FoodContext"

function FoodCard({food}) {
    const {isFavourite, addToFavourites, removeFromFavourites, getRatingInfo, setRating, setStatus} = useFoodContext()

    const favourite = isFavourite(food.id)
    const {rating, status} = getRatingInfo(food.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(food.id)
        else addToFavourites(food);
    }

    function onStarClick(e, value) {
        e.preventDefault()
        setRating(food.id, value)
    }

    function onStatusToggle(e) {
        e.preventDefault()
        setStatus(food.id, status === "tried" ? "not-tried" : "tried")
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

                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`star${value <= rating ? " filled" : ""}`}
                                onClick={(e) => onStarClick(e, value)}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <button className="status-btn" onClick={onStatusToggle}>
                        {status === "tried" ? "Tried" : "Not Tried"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodCard