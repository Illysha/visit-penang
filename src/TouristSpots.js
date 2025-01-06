import React from 'react';
import { useNavigate } from 'react-router-dom';

function TouristSpots() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/'); // Navigate to the home page ("/")
    };

    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Add images for this category */}
            <div className="tourist-spots-images">
                <img src="https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg"
                     alt="Tourist Spot 1"/>
                <img src="https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg"
                     alt="Tourist Spot 2"/>
            </div>
            {/* Embed YouTube video */}
            <div className="tourist-spots-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3KCOgVq-lCs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Tourist spots Video"
                ></iframe>
            </div>
            <button onClick={handleBackToHome} className="link">Back to Home</button>
        </div>
    );
}


export default TouristSpots;