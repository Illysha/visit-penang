import React from 'react';
import { useParams } from 'react-router-dom';

function ImageDescription() {
    const { id } = useParams();

    const imageDetails = {
        1: {
            title: "Tourist Spot 1",
            description: "This is a beautiful tourist spot known for its scenic views and cultural heritage.",
            src: "https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg"
        },
        2: {
            title: "Tourist Spot 2",
            description: "A vibrant location filled with activities, perfect for family outings.",
            src: "https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg"
        }
    };

    const image = imageDetails[id];

    if (!image) {
        return <p>Image not found</p>;
    }

    return (
        <div className="image-description">
            <h2>{image.title}</h2>
            <img src={image.src} alt={image.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
            <p>{image.description}</p>
        </div>
    );
}

export default ImageDescription;
