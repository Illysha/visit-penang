import { FoodBeverages } from "./categories/FoodBeverages.js";
import { TouristSpots } from "./categories/TouristSpots.js";
import { CultureHeritage } from "./categories/CultureHeritage.js";
import { Hotels } from "./categories/Hotels.js";
import { AboutUs } from "./categories/AboutUs.js";
import './App.css';

// Define the App component as a function
const App = () => {
    const categories = {
        "about-us": AboutUs,
        "food-beverages": FoodBeverages,
        "tourist-spots": TouristSpots,
        "culture-heritage": CultureHeritage,
        "hotels": Hotels
    };

    // Function to update the content dynamically
    function loadCategory(categoryId) {
        const contentSection = document.getElementById("dynamic-content");

        if (!contentSection) {
            console.error("Content section not found!");
            return;
        }

        const category = categories[categoryId];

        if (category) {
            contentSection.innerHTML = `
        <h2>${category.title}</h2>
        <p>${category.content}</p>
      `;
        } else {
            contentSection.innerHTML = `
        <p>Category not found.</p>
      `;
        }
    }

    // Event listener for navigation links
    document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll("nav a");

        if (!navLinks.length) {
            console.warn("No navigation links found.");
            return;
        }

        navLinks.forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                const categoryId = link.getAttribute("href").substring(1); // Extract category ID
                loadCategory(categoryId);
            });
        });

        loadCategory("about-us"); // Default category on page load
    });

   /* return (
        <div>
            <nav>
                <a href="#about-us">About Us</a>
                <a href="#food-beverages">Food & Beverages</a>
                <a href="#tourist-spots">Tourist Spots</a>
                <a href="#culture-heritage">Culture & Heritage</a>
                <a href="#hotels">Hotels</a>
            </nav>
            <div id="dynamic-content"></div>
        </div>
    );*/
};

// Export the App component as the default export
export default App;
