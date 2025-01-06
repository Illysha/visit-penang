import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function TouristSpots() {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const images = [
        {
            id: 1,
            src: "https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg",
            alt: "Tourist Spot 1",
            description: "This is a beautiful tourist spot known for its scenic views and cultural heritage."
        },
        {
            id: 2,
            src: "https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg",
            alt: "Tourist Spot 2",
            description: "A vibrant location filled with activities, perfect for family outings."
        }
    ];

    // Function to handle image click and navigate to description page
    const handleImageClick = (id) => {
        navigate(`/description/${id}`); // Navigate to description page with the ID
    };

    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Render images dynamically */}
            <div className="tourist-spots-images">
                {images.map((image) => (
                    <figure
                        key={image.id}
                        onClick={() => handleImageClick(image.id)} // Add click handler
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={image.src} alt={image.alt} />
                        <figcaption>{image.alt}</figcaption>
                    </figure>
                ))}
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
