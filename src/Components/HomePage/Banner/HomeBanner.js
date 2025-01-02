import Image from '../../../Assets/Images/Iam.png';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <div className="intro">
                <img src={Image} alt='bitmoji'></img>
                <div>
                    <h5>Hello! I'm Yaroslava Mishchenko</h5>
                    <p>A Front Ent Developer who</p>
                    <h2>Judges a book <br/>by its cover... </h2>
                    <p className='baby-text'>Because if the cover does not impress you what else can?</p>
                </div>
            </div>
            <div className="description">
                <h2>I'm a React Front End Web Developer</h2>
                <p className='colored-text'>Currently, I am a freelancer.</p>
                <p>I am a passionate web developer with over 2 years of experience studying web development at Ampli Teen Accelerator. I specialize in creating responsive and user-friendly websites tailored to meet clients' unique
                    needs. My expertise extends beyond technical development; I excel at designing websites that align with  customer requirements, ensuring a seamless and engaging user experience. With a strong foundation in web technologies  and a commitment to continuous learning, I am dedicated to delivering high-quality, custom web solutions.</p>
            </div>
        </div>
    );
};
export default HomeBanner;