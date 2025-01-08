import React from "react";

export const CultureHeritage = () => {
    return (
        <div>
            <h1 style="text-align: center;">
                Culture & Heritage
            </h1>
            <p>
                Penang is rich in culture and history. Explore George Town, a UNESCO World Heritage Site, and learn
                about its diverse cultural influences through museums, temples, and traditional festivals.
            </p>


            {/* YouTube Video */}
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h2>Watch: Cultural Insights of Penang</h2>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/MDbZhLQaC4w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{maxWidth: '560px'}}
                ></iframe>
            </div>

            {/* Dynamic Content Section with Image-Text Pairs */}
            <div id="dynamic-content">

                <div className="image-text-pair"
                     style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <img
                        src="path_to_image_2.jpg"
                        alt="Image 2"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>Title 2</h3>
                        <p>Description of the second pair.</p>
                    </div>
                </div>

                <div className="image-text-pair"
                     style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <img
                        src="path_to_image_2.jpg"
                        alt="Image 2"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>Title 2</h3>
                        <p>Description of the second pair.</p>
                    </div>
                </div>

                <div className="image-text-pair"
                     style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <img
                        src="path_to_image_3.jpg"
                        alt="Image 3"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>Title 3</h3>
                        <p>Description of the third pair.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};





