
function FoodCard({food}) {

    function onFavouriteClick() {
        alert("clicked")
    }
    return (
        <>
            <div className="food-card">
                <div className="photo-image">
                    <img src={food.url} alt={food.name} />
                </div>
                <div className="food-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>
                     FAVOURITE!
                    </button>
                </div>
                <div className="food-info">
                    <h3>{food.name}</h3>
                    <p>{food.spice}/10</p>
                    <p>{food.sweet}/10</p>
                    <p>{food.salty}/10</p>
                </div>
            </div>
        </>
    )
}

export default FoodCard