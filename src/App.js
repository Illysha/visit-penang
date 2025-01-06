
import React from 'react';
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs'; // Import the AboutUs component
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Visit Penang</h1>
                <p>Explore the best of Penang: tourist spots, food, hotels, culture and heritage!</p>
            </header>
            <TouristSpots />
            <FoodBeverages />
            <Hotels />
            <CultureHeritage />
            <AboutUs /> {/* Add the About Us section here */}
        </div>
    );
}

export default App;