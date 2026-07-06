import {createContext, useState, useContext, useEffect} from "react"

const FoodContext = createContext()

export const useFoodContext = () => useContext(FoodContext)

export const FoodProvider = ({children}) => {
    cost [Favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getitem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    return <FoodContext.Provider>
        {children}
    </FoodContext.Provider>
}