import HomeBanner from "./Banner/HomeBanner";
import Work from './WorkExperience/Work';
import Skills from './Skills/Skills';
import ProjectGrid from './ExampleProject/Example';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Work />
            <Skills />
            <ProjectGrid/>
        </div>
    )
};

export default Home;