import React, { useEffect } from 'react';

function TouristSpots() {
    // useEffect hook to run the logic when the component is mounted
    useEffect(() => {
        // Get the 'Back to Home' link by its ID
        const backToHomeLink = document.getElementById('back-to-home');

        // Add event listener to handle click event
        const handleBackToHome = (event) => {
            event.preventDefault(); // Prevent the default action (which would refresh the page)
            window.location.href = 'index.html'; // Navigate to the home page (index.html)
        };

        if (backToHomeLink) {
            backToHomeLink.addEventListener('click', handleBackToHome);
        }

        // Cleanup event listener when the component is unmounted
        return () => {
            if (backToHomeLink) {
                backToHomeLink.removeEventListener('click', handleBackToHome);
            }
        };
    }, []); // Empty dependency array ensures this runs only once when the component is mounted

    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Add images for this category */}
            <div className="tourist-spots-images">
                <img src="https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg" alt="Tourist Spot 1" />
                <img src="https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg" alt="Tourist Spot 2" />
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
            {/* Back to Home link */}
            <a href="#" id="back-to-home" className="link">Back to Home</a>
        </div>
    );
}

export default TouristSpots;
