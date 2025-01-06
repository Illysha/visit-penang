import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs';
import ImageDescription from './ImageDescription'; // Import the ImageDescription component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Visit Penang</h1>
                    <p>Explore the best of Penang: tourist spots, food, hotels, culture, and heritage!</p>
                </header>
                <Routes>
                    {/* Main sections */}
                    <Route path="/" element={
                        <>
                            <TouristSpots />
                            <FoodBeverages />
                            <Hotels />
                            <CultureHeritage />
                            <AboutUs />
                        </>
                    } />

                    {/* Image description page */}
                    <Route path="/description/:id" element={<ImageDescription />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


