import './App.css';
import FoodCard from "./components/FoodCard"
import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import {Routes, Route} from "react-router-dom"

function App() {
  const foodNumber =2;


  return (
    <>

      <main className="main-content">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/favourites" element = {<Favourites />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
