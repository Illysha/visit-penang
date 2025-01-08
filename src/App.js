import React, { useState } from "react";
import { FoodBeverages } from "./categories/FoodBeverages";
import { TouristSpots } from "./categories/TouristSpots";
import { CultureHeritage } from "./categories/CultureHeritage";
import { Hotels } from "./categories/Hotels";
import { AboutUs } from "./categories/AboutUs";
import "./App.css";

const App = () => {
    // Define the categories
    const categories = {
        "about-us": { title: "About Us", content: <AboutUs /> },
        "food-beverages": { title: "Food & Beverages", content: <FoodBeverages /> },
        "tourist-spots": { title: "Tourist Spots", content: <TouristSpots /> },
        "culture-heritage": { title: "Culture & Heritage", content: <CultureHeritage /> },
        "hotels": { title: "Hotels", content: <Hotels /> },
    };

    // State to manage the current category
    const [currentCategory, setCurrentCategory] = useState("about-us");

    // Function to handle navigation
    const loadCategory = (categoryId) => {
        setCurrentCategory(categoryId);
    };

    return (
        <div>
            <nav>
                <div className="dropdown">
                    <button className="dropdown-btn">Explore More</button>
                    <div className="dropdown-content">
                        {Object.keys(categories).map((key) => (
                            <a
                                key={key}
                                href={`#${key}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    loadCategory(key);
                                }}
                            >
                                {categories[key].title}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Render the current category's content */}
            {categories[currentCategory]?.content || <p>Category not found.</p>}
        </div>
    );
};

export default App;

