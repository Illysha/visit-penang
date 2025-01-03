import React from 'react';

function FoodBeverages() {
    return (
        <div className="food-beverages">
            <h2>Food & Beverages</h2>
            <p>Discover the best culinary delights Penang has to offer, from street food to fine dining.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="food-beverages-images">
                <img src="https://i.pinimg.com/236x/09/aa/c5/09aac56fce5434d861dcf07fda8622e5.jpg" alt="Dish 1"/>
                <img src="https://i.pinimg.com/236x/b2/ee/90/b2ee90b8bf66c400078cdadd6de68cc0.jpg" alt="Dish 2"/>
            </div>
            <div className="food-beverages-video">
                <video controls>
                <source src="https://youtu.be/6UKN1YpVweg?si=y-TfOdARAChvTrNd" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default FoodBeverages;
