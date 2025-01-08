import React from "react";

export const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to Visit Penang! Our mission is to provide visitors with an
                unforgettable experience as they explore the beauty, culture, and
                attractions of Penang. Whether you're a food lover, history enthusiast,
                or adventure seeker, Penang has something special for everyone.
                Discover the charm of our island through our curated categories and
                make your trip truly memorable.
            </p>

            <div className="about-image">
                <img
                    src="https://heartpatrick.com/penang10/heartpatrick_penang_pulau_pinang_georgetown_malaysia03.jpg" // Replace with actual image URL
                    alt="Penang"
                    className="about-image-img"
                />
                <div className="about-description">
                    <h3>Explore Penang</h3>
                    <p>
                        Penang offers a unique blend of cultural diversity, rich heritage,
                        and natural beauty. From the historic streets of George Town to the
                        tranquil beaches, there's always something new to explore.
                    </p>
                </div>
            </div>
        </div>
    );
};



