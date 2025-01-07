
import { FoodBeverages } from "./FoodBeverages.js";
import { TouristSpots } from "./TouristSpots.js";
import { CultureHeritage } from "./CultureHeritage.js";
import { Hotels } from "./Hotels.js";
import { AboutUs } from "./AboutUs.js";


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
    const category = categories[categoryId];

    if (category) {
        contentSection.innerHTML = `
      <h2>${category.title}</h2>
      <p>${category.content}</p>
    `;
    } else {
        contentSection.innerHTML = `<p>Category not found.</p>`;
    }
}

// Event listener for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior
            const categoryId = link.getAttribute("href").substring(1); // Extract category ID
            loadCategory(categoryId);
        });
    });

    // Load the default category (About Us) on page load
    loadCategory("about-us");
});
