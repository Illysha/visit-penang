import React from "react";

export const CultureHeritage = () => {
    return (
        <div>
            <h1>Culture & Heritage</h1>
            <p>
                Penang is rich in culture and history. Explore George Town, a UNESCO World Heritage Site, and learn
                about its diverse cultural influences through museums, temples, and traditional festivals.
            </p>

            {/* Image with Title */}
            <figure style={{textAlign: 'center',  marginBottom: '30px'}}>
                <img
                    src="https://i.pinimg.com/236x/3b/94/54/3b9454bc687faa9c5bb61e228e8de3b5.jpg"
                    alt="Culture and Heritage"
                    style={{width: '560', height: '315'}}
                />
                <figcaption>Exploring the cultural heritage of George Town</figcaption>
            </figure>

            {/* YouTube Video */}
            <div style={{textAlign: 'center'}}>
                <h2>Watch: Cultural Insights of Penang</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MDbZhLQaC4w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};



