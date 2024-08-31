import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Images/Logo.png';
import ContactMe from '../../ContactMe/ContactMe.js';

function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='Logo' />
            <ul>
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/'>Projects</Link></li>
                <li><Link to='/'>Blog</Link></li>
            </ul>
            <ContactMe />
        </div>
    )
}

export default Header;