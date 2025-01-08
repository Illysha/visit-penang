import React from "react";

export const Hotels = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Accommodation: “Stay in Style: From Luxury to Budget-Friendly Options”</h1>
            <p>
                Whether you're after ultimate luxury or a more budget-friendly option, Penang has
                accommodations that cater to every need. With a variety of stays from world-class resorts to
                unique boutique hotels, you’ll find the perfect place to rest and recharge during your visit.
            </p>


            {/* YouTube Video */}
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h2>Watch: Best Hotels in Penang</h2>
                <iframe
                    width="100%"
                    height="315"
                    src="https://youtu.be/U4zt_fm1QVA?si=h-K4H_ytaxlP38ct"
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
                        alt="Luxury Resort"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>Luxurious Retreats by the Sea: Shangri-La’s Rasa Sayang Resort & Spa</h3>
                        <p>Experience unparalleled luxury at Shangri-La’s Rasa Sayang Resort & Spa, nestled
                            along the golden sands of Batu Ferringhi. This resort boasts world-class amenities,
                            including a serene spa, stunning sea views, and exquisite dining options. Perfect for
                            honeymooners or those seeking a peaceful escape, it promises a retreat like no other.</p>
                    </div>
                </div>

                <div className="image-text-pair" style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                    <div className="text" style={{flex: 1}}>
                        <h3>Charming Boutique Hotels: The Edison George Town and Seven Terraces</h3>
                        <p>Dive into Penang’s rich heritage by staying at boutique hotels like The Edison George
                            Town or Seven Terraces. These properties are renowned for their historic architecture,
                            artistic interiors, and personalized service. Situated in the heart of George Town, they
                            are the ideal base for exploring Penang’s UNESCO World Heritage Sites.
                        </p>
                    </div>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Budget Hotel"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy49nXPfNVGM2SSbb_HqSqIF3lrHeiXZM1Og&s"
                        alt="Boutique Hotel"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '20px'
                        }}
                    />
                    <div className="text" style={{flex: 1}}>
                        <h3>Unique Stays for Adventurers: Boulder Valley Glamping</h3>
                        <p>For those looking to connect with nature, Boulder Valley Glamping offers a one-of-akind experience. Nestled in the rainforest, this eco-resort provides the perfect mix of
                            adventure and relaxation. Wake up to the sounds of nature and unwind under the stars,
                            making your stay in Penang truly unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

