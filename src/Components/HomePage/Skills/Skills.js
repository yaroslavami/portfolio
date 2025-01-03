import { DiJavascript1, DiCss3, DiGit, DiNodejs, DiReact, DiSass } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <p className="bigger-text">
                I specialize in developing responsive web applications that deliver seamless user experiences.
            </p>
            <p className="smaller-text">
                My expertise includes front-end development with a focus on accessibility, usability, and collaboration for creative projects and startups.
            </p>
            <div className="skill-items">
                <DiJavascript1 size={50} style={{ color: '#F7DF1E' }} />
                <DiCss3 size={50} style={{ color: '#264de4' }} />
                <DiGit size={50} style={{ color: '#ec5600' }} />
                <DiNodejs size={50} style={{ color: '#43853d' }} />
                <DiReact size={50} style={{ color: '#61DAFB' }} />
                <DiSass size={50} style={{ color: '#CC6699' }} />
                <SiTailwindcss size={50} style={{ color: '#38B2AC' }} />
            </div>
        </div>
    );
};

export default Skills;
