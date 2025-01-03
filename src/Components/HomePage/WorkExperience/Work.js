import React from 'react';
import './Work.css';
import lightbulbImage from '../../../Assets/Images/lightbulb.png';
import starsavedImage from '../../../Assets/Images/starsaved.png';

const Work = () => {
    const experiences = [
        {
            title: "Website Development",
            organization: "Ampli Teen Accelerator/ACTIVE Generation",
            description: [
                "Designed and developed a functional website to support organizational goals.",
                "Utilized React.js, HTML5, and CSS to create user-friendly interfaces.",
                "Worked collaboratively with a team to ensure the project’s success."
            ],
            image: starsavedImage,
        },
        {
            title: "Sound and Light Crew Member",
            organization: "High School Events",
            description: [
                "Operated and maintained sound and lighting equipment for school events.",
                "Enhanced organizational skills and developed technical troubleshooting abilities.",
                "Worked under time constraints to meet event deadlines."
            ],
            image: lightbulbImage, 
        }
    ];

    return (
        <div className="volunteer">
            <h3>Experience</h3>
            <div className="volunteer-list">
                {experiences.map((experience, index) => (
                    <div className="volunteer-item" key={index}>
                        <img
                            src={experience.image}
                            alt={`${experience.title} illustration`}
                        />
                        <div>
                            <h4>{experience.title}</h4>
                            <h5>{experience.organization}</h5>
                            <ul>
                                {experience.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
