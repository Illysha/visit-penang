
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs';
import './App.css'; // Import your CSS styles

function App() {
    return (
        <Router>
            {/* Add navigation for different sections */}
                <Routes>  {/* Use Routes here instead of Switch */}
                    <Route path="/" element={<div className="home"><h2>Home Page</h2><p>Welcome to the best places to visit in Penang!</p></div>} />
                    <Route path="/tourist-spots" element={<TouristSpots />} />
                    <Route path="/food-beverages" element={<FoodBeverages />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/culture-heritage" element={<CultureHeritage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
        </Router>
    );
}

export default App;
