import React from 'react';
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage'; // Import the new component
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
            <CultureHeritage /> {/* Add the Culture and Heritage section here */}
        </div>
    );
}

export default App;



