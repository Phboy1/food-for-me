import {createContext, useState, useContext, useEffect} from "react"

const FoodContext = createContext()

export const useFoodContext = () => useContext(FoodContext)

export const FoodProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])
    const [ratings, setRatings] = useState({})

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))

        const storedRatings = localStorage.getItem("ratings")

        if (storedRatings) setRatings(JSON.parse(storedRatings))
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    useEffect(() => {
        localStorage.setItem("ratings", JSON.stringify(ratings))
    }, [ratings])

    function addToFavourites(food) {
        setFavourites([...favourites, food])
    }

    function removeFromFavourites(id) {
        setFavourites(favourites.filter(food => food.id !== id))
    }

    function isFavourite(id) {
        return favourites.some(food => food.id === id)
    }

    function setRating(id, rating) {
        setRatings({...ratings, [id]: {...ratings[id], rating, status: "tried"}})
    }

    function setStatus(id, status) {
        setRatings({...ratings, [id]: {rating: 0, ...ratings[id], status}})
    }

    function getRatingInfo(id) {
        return ratings[id] || {rating: 0, status: "not-tried"}
    }

    return <FoodContext.Provider value={{
        favourites, addToFavourites, removeFromFavourites, isFavourite,
        ratings, setRating, setStatus, getRatingInfo
    }}>
        {children}
    </FoodContext.Provider>
}