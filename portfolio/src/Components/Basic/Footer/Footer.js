import SocialMediaLinks from '../../../Assets/SocialMediaIcons/SocialIcons';

function Footer() {
    return (
        <div>
            <SocialMediaLinks />
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
    );
}

export default Footer;
