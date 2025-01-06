import React from 'react';
import { useParams } from 'react-router-dom';

const DescriptionPage = () => {
    const { itemId } = useParams();

    const getItemDescription = (id) => {
        // You can fetch the description dynamically or hardcode for now
        switch (id) {
            case '1':
                return "Description for Tourist Spots...";
            case '2':
                return "Description for Food & Beverages...";
            case '3':
                return "Description for Hotels...";
            case '4':
                return "Description for Culture & Heritage...";
            default:
                return "No description available.";
        }
    };

    return (
        <div>
            <h1>Item {itemId} Description</h1>
            <p>{getItemDescription(itemId)}</p>
        </div>
    );
};

export default DescriptionPage;
