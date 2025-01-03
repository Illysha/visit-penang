import React from 'react';

function TouristSpots() {
    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="tourist-spots-images">
                <img src="https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg"
                     alt="Tourist Spot 1"/>
                <img src="https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg"
                     alt="Tourist Spot 2"/>
            </div>
            <div className="tourist-spots-video">
                <video controls>
                    <source src="path_to_spot_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default TouristSpots;
