import React from 'react';
import { useParams } from 'react-router-dom';

function TouristSpotDescription() {
    const { id } = useParams(); // Get the id from the URL

    // You can use this id to fetch or display specific content for each tourist spot
    return (
        <div className="tourist-spot-description">
            <h2>Tourist Spot {id}</h2>
            <p>Here is more information about tourist spot {id}.</p>
            {/* Additional content related to the specific tourist spot */}
        </div>
    );
}

export default TouristSpotDescription;
