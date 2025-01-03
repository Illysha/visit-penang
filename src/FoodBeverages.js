import React from 'react';

function FoodBeverages() {
    return (
        <div className="food-beverages">
            <h2>Food & Beverages</h2>
            <p>Discover the best culinary delights Penang has to offer, from street food to fine dining.</p>
            {/* Add images for this category */}
            <div className="food-beverages-images">
                <img src="https://i.pinimg.com/236x/09/aa/c5/09aac56fce5434d861dcf07fda8622e5.jpg" alt="Dish 1"/>
                <img src="https://i.pinimg.com/236x/b2/ee/90/b2ee90b8bf66c400078cdadd6de68cc0.jpg" alt="Dish 2"/>
            </div>
            {/* Embed YouTube video */}
            <div className="food-beverages-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6UKN1YpVweg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Food & Beverages Video"
                ></iframe>
            </div>
        </div>
    );
}

export default FoodBeverages;

