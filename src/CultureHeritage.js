// src/components/CultureHeritage.js
import React from 'react';

function CultureHeritage() {
    return (
        <div className="culture-heritage">
            <h2>Culture Heritage</h2>
            <p>Explore the rich cultural heritage of Penang through its monuments, museums, and historical landmarks.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="culture-heritage-images">
                <img src="https://i.pinimg.com/236x/3b/94/54/3b9454bc687faa9c5bb61e228e8de3b5.jpg"
                     alt="Heritage Site 1"/>
                <img src="https://i.pinimg.com/236x/35/b6/ac/35b6ac17a57667952c09270a19f2038e.jpg"
                     alt="Heritage Site 2"/>
            </div>
            <div className="culture-heritage-video">
                <video controls>
                    <source src="path_to_heritage_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default CultureHeritage;