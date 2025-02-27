import React, { useState, useEffect } from 'react';
import './AboutMeBanner.css';

const AboutMeDetails = () => {
    return (
        <div className="about-me-details">
            <div className="intro">
                <h2>About Me</h2>
                <p>
                    Passionate about front-end development, I specialize in React, Python, and C++, building interactive and seamless user experiences that make an impact.
                </p>
            </div>
            <div className="gallery">
                <h3>Photo Gallery</h3>
                <div className="photo-grid">
                    <img src="https://cdn.pixabay.com/photo/2022/06/30/02/00/mountains-7292778_960_720.jpg" alt="Project 1" />
                    <img src="https://cdn.pixabay.com/photo/2020/10/15/06/59/mountains-5656169_960_720.jpg" alt="Project 2" />
                    <img src="https://cdn.pixabay.com/photo/2021/01/19/18/45/field-5932123_1280.jpg" alt="Event 1" />
                    <img src="https://cdn.pixabay.com/photo/2022/06/30/02/00/mountains-7292778_960_720.jpg" alt="Project 1" />
                    <img src="https://cdn.pixabay.com/photo/2020/10/15/06/59/mountains-5656169_960_720.jpg" alt="Project 2" />
                    <img src="https://cdn.pixabay.com/photo/2021/01/19/18/45/field-5932123_1280.jpg" alt="Event 1" />
                </div>
            </div>
            <div className="growth-story">
                <h3>Work & Growth Journey</h3>
                <p>I’m a front-end developer passionate about crafting seamless and creative websites. I believe that even small contributions, like building engaging digital experiences, help drive the growth of the IT industry. At the same time, web development is my gateway to achieving my dream—traveling the world and experiencing its beauty. Every line of code brings me one step closer to exploring the places I’ve always dreamed of, and that’s what fuels my journey in development.
                </p>
            </div>
        </div>
    );
};

const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBanner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-me-wrapper">
            {showBanner ? (
                <div className="name-banner">
                        <h1 className="name">Yaroslava Mishchenko</h1>
                        <div className="arrow">&#x2192;</div>
                </div>
            ) : (
                <AboutMeDetails />
            )}
        </div>
    );
};

export default Banner;
