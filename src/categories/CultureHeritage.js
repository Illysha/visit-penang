import React from "react";

export const CultureHeritage = () => {
    return (
        <div>
            <h1>Culture & Heritage</h1>
            <p>
                Penang is rich in culture and history. Explore George Town, a UNESCO World Heritage Site, and learn
                about its diverse cultural influences through museums, temples, and traditional festivals.
            </p>

            {/* YouTube Video */}
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h2> Cultural Insights of Penang</h2>
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
                <div className="image-text-pair" style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Image 1"
                        style={{width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px'}}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>George Town Heritage Trail</h3>
                        <p>Start your journey through Penang’s arts and heritage by walking the George Town
                            Heritage Trail. This UNESCO World Heritage Site is a vibrant collection of colonialera architecture, colorful street art, and cultural landmarks. You’ll pass historic
                            temples, century-old mansions, and intriguing alleyways adorned with murals that
                            bring the city’s past to life. Be sure to visit Street Art Lane for iconic murals by local
                            artists!
                        </p>
                    </div>
                </div>

                <div className="image-text-pair" style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <div className="text" style={{flex: 1}}>
                        <h3>Khoo Kongsi Clan House</h3>
                        <p>Explore the grandeur of the Khoo Kongsi Clan House, one of the most prestigious
                            clan houses in Penang, showcasing the rich cultural heritage of the Khoo family, who
                            were influential in the region. The clan house, located in George Town, is an
                            architectural masterpiece, with intricate carvings and traditional designs that reflect
                            the opulence and history of the Khoo family’s success in the late 19th century</p>
                    </div>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Image 2"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                </div>

                <div className="image-text-pair" style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <img
                        src="path_to_image_3.jpg"
                        alt="Image 3"
                        style={{width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px'}}
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




