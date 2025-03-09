import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMeDetails = () => {
    return (
        <div className="about-me-details">
            <div className="growth-story">
                <h3>My Journey in IT</h3>
                <div className="timeline">
                {/* 2019-2022 */}
                <div className="timeline-item">
                    <h3 className="timeline-year">2019 - 2022</h3>
                    <p>
                    My passion for technology began in <strong className="highlighted-text">2019</strong> when my mom discovered
                    <strong className="highlighted-text"> Python</strong> coding classes in our town. We started with the basics, learning how to 
                    build simple programs and even exploring <strong className="highlighted-text">API</strong> usage by creating a  
                    <strong className="highlighted-text"> Telegram bot</strong>. The plan was to move on to robotics, but before we could, 
                    <strong className="highlighted-text"> COVID-19</strong> put everything on hold. Instead of stopping, I took this as an opportunity 
                    to continue learning on my own, researching the <strong className="highlighted-text">IT</strong> industry and exploring different programming languages.
                    </p>
                </div>

                {/* 2022-2023 */}
                <div className="timeline-item">
                    <h3 className="timeline-year">2022 - 2023</h3>
                    <p>
                    During this time, I experimented with <strong className="highlighted-text">C#</strong> and <strong className="highlighted-text">C++</strong>, 
                    but without structured guidance, I didn't get very far. Then, after the war in <strong className="highlighted-text">Ukraine</strong> began, 
                    I moved to a new country and decided to pursue a degree in IT—though I wasn’t sure which specific path to take. Initially, I envisioned 
                    myself working on complex software development projects, but my perspective evolved after moving to <strong className="highlighted-text">Canada</strong>.
                    </p>
                </div>

                {/* 2023 - Early 2024 */}
                <div className="timeline-item">
                    <h3 className="timeline-year">2023 - Early 2024</h3>
                    <p>
                    In the spring of <strong className="highlighted-text">2023</strong>, I joined <strong className="highlighted-text">Ampli</strong>, an online teen accelerator, 
                    where I took my first <strong className="highlighted-text">Beginner Front-End Web Development course</strong>. This introduced me to 
                    the fundamentals of web development and the importance of designing user-friendly experiences. Later that year, I also took an open 
                    <strong className="highlighted-text"> computer science</strong> course at my school, which helped me strengthen my <strong className="highlighted-text">Python</strong> skills.
                    </p>
                </div>

                {/* Mid 2024 */}
                <div className="timeline-item">
                    <h3 className="timeline-year">Mid 2024</h3>
                    <p>
                    After completing the beginner course, my study manager at <strong className="highlighted-text">Ampli</strong> encouraged me to join the 
                    <strong className="highlighted-text"> Advanced Front-End Web Development course</strong>. Here, I deepened my knowledge by learning 
                    <strong className="highlighted-text"> React.js</strong>, mastering <strong className="highlighted-text">project management</strong> techniques, and applying best practices 
                    in <strong className="highlighted-text">front-end development</strong>. One of the highlights of this program was a four-month collaboration 
                    with a non-profit organization, <strong className="highlighted-text">ACTIVE Generation</strong>, where my team and I worked on building a webpage. 
                    This <strong className="highlighted-text">real-world</strong> experience helped me gain valuable teamwork and problem-solving skills that are essential in the 
                    <strong className="highlighted-text"> IT</strong> industry.
                    </p>
                </div>

                {/* Late 2024 - Present */}
                <div className="timeline-item">
                    <h3 className="timeline-year">Late 2024 - Present</h3>
                    <p>
                    In <strong className="highlighted-text">November 2024</strong>, I completed the <strong className="highlighted-text">Advanced Front-End Development course</strong>, earning my 
                    <strong className="highlighted-text"> second certification</strong> and gaining lifelong lessons from the experience. Currently, I am further developing my 
                    skills as a <strong className="highlighted-text">front-end web developer</strong>, while also exploring <strong className="highlighted-text">C++</strong> through a school-offered 
                    course to bring me closer to becoming a <strong className="highlighted-text">full-stack developer</strong>.
                    </p>
                    <p>
                    Even though I am still in high school, I have built a <strong className="highlighted-text">strong</strong> foundation in <strong className="highlighted-text">web development </strong> 
                    and have the skills needed to contribute to <strong className="highlighted-text">real-world projects</strong>. My journey in <strong className="highlighted-text">IT</strong> is ongoing, 
                    and I am excited to keep <strong className="highlighted-text">growing</strong>, <strong className="highlighted-text">learning</strong>, and <strong className="highlighted-text">tackling </strong> 
                    new challenges in the industry.
                    </p>
                </div>
                </div>
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
