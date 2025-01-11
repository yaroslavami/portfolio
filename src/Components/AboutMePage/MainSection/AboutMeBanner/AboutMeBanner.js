import React, { useState, useEffect } from 'react';
import './AboutMeBanner.css';

const AboutMeDetails = () => {
    return (
        <div className="about-me-details">
            <div className="intro">
                <h2>About Me</h2>
                <p>
                    I am a front-end developer passionate about crafting seamless, interactive user interfaces. Over the years, I have honed my skills in React, Python, and C++ while contributing to impactful projects. 
                </p>
            </div>
            <div className="gallery">
                <h3>Photo Gallery</h3>
                <div className="photo-grid">
                    {/* Add images here */}
                    <img src="photo1.jpg" alt="Project 1" />
                    <img src="photo2.jpg" alt="Project 2" />
                    <img src="photo3.jpg" alt="Event 1" />
                </div>
            </div>
            <div className="growth-story">
                <h3>Work & Growth Journey</h3>
                <p>
                    My journey started with a curiosity about how websites are built. Today, I’ve grown into a developer capable of turning ideas into visually appealing and functional digital products. Every project teaches me new skills, enhancing my ability to deliver quality solutions.
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
