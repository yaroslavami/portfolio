import React from "react";
import "./Example.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Travello from '../../../Assets/Images/Travello.png';
import Snake from '../../../Assets/Images/Snake.png';

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <span className="featured-tag">Featured Project</span>
                <h3 className="project-title">{title}</h3>
            </div>
            <p className="project-description">{description}</p>
            <div className="project-preview">
                <img src={image} alt={`${title} preview`} />
            </div>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                </a>
            </div>
        </div>
    );
};

const ProjectGrid = () => {
    const projects = [
        {
            title: "Travello",
            description: "A travel planning web app for organizing trips, finding attractions, and sharing itineraries with friends.",
            image: Travello,
            githubLink: "https://github.com/yaroslavami/travello",
            demoLink: "https://travello-l64z.onrender.com/",
        },
        {
            title: "Snake Game",
            description: "A modern take on the classic Snake game with a redesigned UI and interactive gameplay.",
            image: Snake,
            githubLink: "https://github.com/yaroslavami/webSnake",
            demoLink: "https://yaroslavami.github.io/webSnake/",
        },
    ];

    return (
        <div className="project-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;
