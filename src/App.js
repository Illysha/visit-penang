import { FoodBeverages } from "./FoodBeverages.js";
import { TouristSpots } from "./TouristSpots.js";
import { CultureHeritage } from "./CultureHeritage.js";
import { Hotels } from "./Hotels.js";
import { AboutUs } from "./AboutUs.js";

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

    return (
        <div>
            <h1>Welcome to Visit Penang</h1>
            <nav>
                {/* Add your navigation links here */}
            </nav>
            <div id="dynamic-content"></div>
        </div>
    );
};

// Export the App component as the default export
export default App;
