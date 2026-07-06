import './App.css';
import FoodCard from "./components/FoodCard"
import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import { FoodProvider } from './contexts/FoodContext';


function App() {


  return (
    <FoodProvider>

      <main className="main-content">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/favourites" element = {<Favourites />} />
        </Routes>
      </main>

    </FoodProvider>
  );
}

export default App;
