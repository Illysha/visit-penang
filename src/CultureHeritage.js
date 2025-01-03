// src/components/CultureHeritage.js
import React from 'react';

function CultureHeritage() {
    return (
        <div className="culture-heritage">
            <h2>Culture Heritage</h2>
            <p>Explore the rich cultural heritage of Penang through its monuments, museums, and historical
                landmarks.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="culture-heritage-images">
                <img src="https://i.pinimg.com/236x/3b/94/54/3b9454bc687faa9c5bb61e228e8de3b5.jpg"
                     alt="Heritage Site 1"/>
                <img src="https://i.pinimg.com/236x/35/b6/ac/35b6ac17a57667952c09270a19f2038e.jpg"
                     alt="Heritage Site 2"/>
            </div>
            <div className="culture-heritage-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://youtu.be/MDbZhLQaC4w?si=bgSYxT6wM9bEBfJL"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title= "Culture and Heriatge Video"
            ></iframe>
        </div>
</div>
)
    ;
}

export default CultureHeritage;
