import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Import Router and Route components
import TouristSpots from './TouristSpots';
import FoodBeverages from './FoodBeverages';
import Hotels from './Hotels';
import CultureHeritage from './CultureHeritage';
import AboutUs from './AboutUs'; // Import the AboutUs component
import TouristSpotDescription from './TouristSpotDescription'; // Import the TouristSpotDescription component
import './App.css';

function App() {
    return (
        <Router>  {/* Wrap your application with Router */}
            <div className="App">
                <header className="App-header">
                    <h1>Visit Penang</h1>
                    <p>Explore the best of Penang: tourist spots, food, hotels, culture and heritage!</p>
                </header>
                <Switch> {/* Use Switch to ensure only one route is matched */}
                    <Route exact path="/" component={TouristSpots} /> {/* Main tourist spots page */}
                    <Route path="/tourist-spot/:id" component={TouristSpotDescription} /> {/* Dynamic route for tourist spot descriptions */}
                    <Route path="/food-beverages" component={FoodBeverages} /> {/* Food and beverages page */}
                    <Route path="/hotels" component={Hotels} /> {/* Hotels page */}
                    <Route path="/culture-heritage" component={CultureHeritage} /> {/* Culture and heritage page */}
                    <Route path="/about-us" component={AboutUs} /> {/* About Us page */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
