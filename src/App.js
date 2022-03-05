import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Breakfast, Lunch, Dinner, Snack, SetMeal } from './components/meals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/breakfast" element={ <Breakfast/> } />
        <Route path="/lunch" element={ <Lunch/> } />
        <Route path="/dinner" element={ <Dinner/> } />
        <Route path="/snack" element={ <Snack/> } />
        <Route path="/setMeal" element={ <SetMeal/> } />
        <Route path="/" exact element={ <Breakfast /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
