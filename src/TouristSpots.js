import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for routing

function TouristSpots() {
    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Add images for this category */}
            <div className="tourist-spots-images">
                <Link to="/tourist-spot/1"> {/* Linking to the description page */}
                    <img
                        src="https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg"
                        alt="Tourist Spot 1"
                    />
                </Link>
                <Link to="/tourist-spot/2"> {/* Linking to another description page */}
                    <img
                        src="https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg"
                        alt="Tourist Spot 2"
                    />
                </Link>
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
        </div>
    );
}

export default TouristSpots;
