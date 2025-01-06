import React, { useState } from 'react';

function TouristSpots() {
    const [modalInfo, setModalInfo] = useState(null);

    const imageData = [
        {
            src: "https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg",
            alt: "George Town Street Art",
            description: "George Town is known for its vibrant street art, featuring murals and graffiti that tell the story of Penang's culture and history.",
        },
        {
            src: "https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg",
            alt: "Kek Lok Si Temple",
            description: "Kek Lok Si Temple is one of the largest Buddhist temples in Southeast Asia, located in the hills of Penang.",
        },
    ];

    const handleImageClick = (image) => {
        setModalInfo(image);
    };

    const closeModal = () => {
        setModalInfo(null);
    };

    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            <div className="tourist-spots-images">
                {imageData.map((image, index) => (
                    <figure key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="image-with-caption"
                            onClick={() => handleImageClick(image)}
                            style={{ cursor: 'pointer' }}
                        />
                        <figcaption>{image.alt}</figcaption>
                    </figure>
                ))}
            </div>

            {modalInfo && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{modalInfo.alt}</h3>
                        <p>{modalInfo.description}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TouristSpots;


