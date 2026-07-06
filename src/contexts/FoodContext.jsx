import {createContext, useState, useContext, useEffect} from "react"

const FoodContext = createContext()

export const useFoodContext = () => useContext(FoodContext)

export const FoodProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    function addToFavourites(food) {
        setFavourites([...favourites, food])
    }

    function removeFromFavourites(id) {
        setFavourites(favourites.filter(food => food.id !== id))
    }

    function isFavourite(id) {
        return favourites.some(food => food.id === id)
    }

    return <FoodContext.Provider value={{favourites, addToFavourites, removeFromFavourites, isFavourite}}>
        {children}
    </FoodContext.Provider>
}