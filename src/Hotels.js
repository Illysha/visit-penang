import React from 'react';

function Hotels() {
    return (
        <div className="hotels">
            <h2>Hotels</h2>
            <p>Find the perfect accommodation in Penang, whether you're looking for luxury or budget-friendly options.</p>
            {/* Add images for this category */}
            <div className="hotels-images">
                <img src="https://i.pinimg.com/236x/b8/f6/62/b8f662baf6026fa74964ee771a0378d5.jpg" alt="Hotel 1"/>
                <img src="https://i.pinimg.com/236x/6d/1b/f5/6d1bf5551da2ed3cc0e1101d8630b1ee.jpg" alt="Hotel 2"/>
            </div>
            {/* Embed YouTube video */}
            <div className="hotels-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RNbLVFG2pSc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Hotels Video"
                ></iframe>
            </div>
        </div>
    );
}

export default Hotels;