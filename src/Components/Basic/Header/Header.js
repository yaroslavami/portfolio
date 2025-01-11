import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Images/Logo.png';

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={Logo} alt='Logo' className='header-logo' />
            </Link>
            <nav>
                <ul className='header-menu'>
                    <li>
                        <Link to='/about-me' aria-label='About Me'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/projects' aria-label='Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/blog' aria-label='Blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
