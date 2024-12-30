import SocialMediaLinks from '../../../Assets/SocialMediaIcons/SocialIcons';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <h3>Contact</h3>
            <p>Looking to enhance your customer experience through an optimized website? Or do you have an exciting project in mind? Let’s connect and bring your vision to life!</p>
            <SocialMediaLinks />
            <p>© {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
