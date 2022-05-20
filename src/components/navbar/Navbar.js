import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

const Navbar = () => {

    return (
        <div className='navbar-wrap'>
            <div className='navbar-logo'>
                <Link to='/'>
                    <img src={logo} alt='Metrics Logo' className='navbar-image'/>
                </Link>
            </div>
            <nav className='navbar-links'>
                <ul className='navbar-list'>
                    <li className='navbar-link'>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='navbar-link contact-button' role='button'>
                        <Link to='/blog'>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;