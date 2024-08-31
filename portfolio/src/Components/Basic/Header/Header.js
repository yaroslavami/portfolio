import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Images/Logo.png';

function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='Logo' />
            <ul>
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/'>Projects</Link></li>
                <li><Link to='/'>Blog</Link></li>
            </ul>
            <button className='contact-btn'>Contact Me</button>
        </div>
    )
}

export default Header;