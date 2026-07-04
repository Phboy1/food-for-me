import { useNavigate } from "react-router-dom"

function Favourites() {
    const navigate = useNavigate();
    
    return (
        <main>
            <button type="button" onClick={() => navigate("/")}>Head back to home!</button>
            <h3>Currently, you do not have any favourites</h3>
        </main>
    )
}

export default Favourites