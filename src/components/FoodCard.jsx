
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
                     ♡
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