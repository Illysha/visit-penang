
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs';

import './App.css'; // Import your CSS styles

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Visit Penang</h1>
                    <p>Explore the best of Penang: tourist spots, food, hotels, culture and heritage!</p>
                </header>

                {/* Add navigation for different sections */}
                <Switch>
                    <Route path="/" exact>
                        <div className="home">
                            <h2>Home Page</h2>
                            <p>Welcome to the best places to visit in Penang!</p>
                        </div>
                    </Route>

                    <Route path="/tourist-spots">
                        <TouristSpots />
                    </Route>

                    <Route path="/food-beverages">
                        <FoodBeverages />
                    </Route>

                    <Route path="/hotels">
                        <Hotels />
                    </Route>

                    <Route path="/culture-heritage">
                        <CultureHeritage />
                    </Route>

                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
