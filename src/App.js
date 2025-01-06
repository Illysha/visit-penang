import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs';
import DescriptionPage from './DescriptionPage'; // Add your DescriptionPage component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Visit Penang</h1>
                    <p>Explore the best of Penang: tourist spots, food, hotels, culture, and heritage!</p>
                    {/* Navigation Links */}
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tourist-spots">Tourist Spots</Link></li>
                            <li><Link to="/food-beverages">Food & Beverages</Link></li>
                            <li><Link to="/hotels">Hotels</Link></li>
                            <li><Link to="/culture-heritage">Culture & Heritage</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* Routing to different pages */}
                <Routes>
                    <Route path="/tourist-spots" element={<TouristSpots />} />
                    <Route path="/food-beverages" element={<FoodBeverages />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/culture-heritage" element={<CultureHeritage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/description/:itemId" element={<DescriptionPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
