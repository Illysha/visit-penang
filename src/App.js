import React, { useState } from "react";
import { FoodBeverages } from "./categories/FoodBeverages.js";
import { TouristSpots } from "./categories/TouristSpots.js";
import { CultureHeritage } from "./categories/CultureHeritage.js";
import { Hotels } from "./categories/Hotels.js";
import { AboutUs } from "./categories/AboutUs.js";
import CategoryNav from './categories/CategoryNav';
import "./App.css";

const App = () => {
    // Define the categories with possible subcategories
    const categories = {
        "about-us": { title: "About Us", content: <AboutUs /> },
        "food-beverages": {
            title: "Food & Beverages",
            content: <FoodBeverages />,
            subcategories: [
                { id: "restaurants", title: "Restaurants" },
                { id: "cafes", title: "Cafes" }
            ]
        },
        "tourist-spots": {
            title: "Tourist Spots",
            content: <TouristSpots />,
            subcategories: [
                { id: "beaches", title: "Beaches" },
                { id: "parks", title: "Parks" }
            ]
        },
        "culture-heritage": {
            title: "Culture & Heritage",
            content: <CultureHeritage />,
            subcategories: [
                { id: "museums", title: "Museums" },
                { id: "historical-sites", title: "Historical Sites" }
            ]
        },
        "hotels": {
            title: "Hotels",
            content: <Hotels />,
            subcategories: [
                { id: "luxury", title: "Luxury" },
                { id: "budget", title: "Budget" }
            ]
        },
    };

    const categories = {
        "about-us": { title: "About Us", content: <AboutUs /> },
        "restaurants": { title: "Restaurants", content: <p>Restaurant content here...</p> },
        "cafes": { title: "Cafes", content: <p>Cafe content here...</p> },
        "beaches": { title: "Beaches", content: <p>Beach content here...</p> },
        "parks": { title: "Parks", content: <p>Parks content here...</p> },
        "museums": { title: "Museums", content: <p>Parks content here...</p> },
        "historical-sites": { title: "Historical Sites", content: <p>Parks content here...</p> },
        "luxury": { title: "Luxury", content: <p>Parks content here...</p> },
        "budget": { title: "Budget", content: <p>Parks content here...</p> },
        // Add other subcategories here
    };


    // State to manage the current category
    const [currentCategory, setCurrentCategory] = useState("about-us");

    // Function to handle navigation
    const loadCategory = (categoryId) => {
        if (categories[categoryId]) {
            setCurrentCategory(categoryId);
        } else {
            setCurrentCategory(null); // Handle invalid category
        }
    };

    return (
        <div>
            {/* Navigation */}
            <CategoryNav categories={categories} loadCategory={loadCategory} />

            {/* Render the current category's content */}
            {categories[currentCategory]?.content || <p>Category not found.</p>}
        </div>
    );
};

export default App;

