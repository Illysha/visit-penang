// src/components/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AboutUs() {
    const navigate = useNavigate(); // useNavigate hook to navigate programmatically

    // Handle the back to home navigation
    const handleBackToHome = () => {
        navigate('/'); // Navigate to the home page ("/")
    };

    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                Welcome to our Penang tourism webpage! Our mission is to bring the vibrant and diverse attractions of
                Penang
                to life. From breathtaking tourist spots to mouth-watering cuisine and world-class accommodations, we
                aim
                to provide a one-stop platform for all your travel needs. Explore, plan, and experience the best that
                Penang
                has to offer!
            </p>
            <button onClick={handleBackToHome} className="link">Back to Home</button>
        </div>
    );
}

export default AboutUs;
