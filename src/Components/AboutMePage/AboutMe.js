import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMeDetails = () => {
    return (
        <div className="about-me-details">
            <div className="intro">
                <h2>About Me</h2>
                <p>
                    Passionate about front-end development, I specialize in React, Python, and C++, building interactive and seamless user experiences that make an impact.
                </p>
            </div>
            <h3 className='gallery-title'>Photo Gallery</h3>
            <div className="gallery">
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
                <h3>My Journey in IT</h3>
                <p>My passion for technology began in 2019 when my mom discovered Python coding classes in our town. We started with the basics, learning how to build simple programs and even exploring API usage by creating a Telegram bot. The plan was to move on to robotics, but before we could, COVID-19 put everything on hold. Instead of stopping, I took this as an opportunity to continue learning on my own, researching the IT industry and exploring different programming languages.</p>
                <p>During this time, I experimented with C# and C++, but without structured guidance, I didn't get very far. Then, after the war in Ukraine began, I moved to a new country and decided to pursue a degree in IT—though I wasn’t sure which specific path to take. Initially, I envisioned myself working on complex software development projects, but my perspective evolved after moving to Canada.</p>
                <p>In the spring of 2023, I joined Ampli, an online teen accelerator, where I took my first Beginner Front-End Web Development course. This introduced me to the fundamentals of web development and the importance of designing user-friendly experiences. Later that year, I also took an open computer science course at my school, which helped me strengthen my Python skills.</p>
                <p>After completing the beginner course, my study manager at Ampli encouraged me to join the Advanced Front-End Web Development course. Here, I deepened my knowledge by learning React.js, mastering project management techniques, and applying best practices in front-end development. One of the highlights of this program was a four-month collaboration with a non-profit organization, ACTIVE Generation, where my team and I worked on building a webpage. This real-world experience helped me gain valuable teamwork and problem-solving skills that are essential in the IT industry.</p>
                <p>In November 2024, I completed the Advanced Front-End Development course, earning my second certification and gaining lifelong lessons from the experience. Currently, I am further developing my skills as a front-end web developer, while also exploring C++ through a school-offered course to bring me closer to becoming a full-stack developer.</p>
                <p>Even though I am still in high school, I have built a strong foundation in web development and have the skills needed to contribute to real-world projects. My journey in IT is ongoing, and I am excited to keep growing, learning, and tackling new challenges in the industry.</p>

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
