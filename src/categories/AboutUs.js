import React from "react";

export const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to Visit Penang! Our mission is to provide visitors with an
                unforgettable experience as they explore the beauty, culture, and
                attractions of Penang. Whether you're a food lover, history enthusiast,
                or adventure seeker, Penang has something special for everyone.
                Discover the charm of our island through our curated categories and
                make your trip truly memorable.
            </p>

            <div className="about-image">
                <img
                    src="https://heartpatrick.com/penang10/heartpatrick_penang_pulau_pinang_georgetown_malaysia03.jpg" // Replace with actual image URL
                    alt="Penang"
                    className="about-image-img"
                />
                <div className="about-description">
                    <h3>The Old Name of Penang</h3>
                    <p>
                        Penang was formerly known as Pulau Ka Satu. A sea rover by the name of Ragam named it
                        Pulau Ka Satu a single island as it was the only large the isolated land he came across
                        on his trading trips between Lingga and Kedah. The name was retained until the coming of
                        the British in 1786. When the areca palm was cultivated on the island after the arrival of
                        British, the name of island was later changed in Pulau Pinang.
                        Over time, Penang attracted diverse ethnic groups, including Malays, Chinese, and Indians,
                        contributing to its vibrant culture. Today, Penang is known for its UNESCO-listed George Town,
                        blending colonial charm with modern innovation and a booming tourism industry
                    </p>
                </div>
            </div>
            <div className="news-row">
                <div className="news-container">
                    <h2>News 1</h2>
                    <ul className="news-list">
                        <li>
                            <a href="https://example.com/news1" target="_blank" rel="noopener noreferrer">
                                Exciting News Headline 1
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="news-container">
                    <h2>News 2</h2>
                    <ul className="news-list">
                        <li>
                            <a href="https://example.com/news2" target="_blank" rel="noopener noreferrer">
                                Exciting News Headline 2
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="news-container">
                    <h2>News 3</h2>
                    <ul className="news-list">
                        <li>
                            <a href="https://example.com/news3" target="_blank" rel="noopener noreferrer">
                                Exciting News Headline 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>


    );
};



