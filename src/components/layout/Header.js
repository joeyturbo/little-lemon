import './Header.css';
import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/Logo.svg';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pages from '../../utilities/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);


function Header() {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid navbar">
        <Link className="navbar__logo" to={pages.get('bookings').path}>
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <button 
          className="navbar__hamburger" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> : 
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul 
          className={isNavExpanded ? 'navbar__links expanded' : 'navbar__links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <Link 
                className={pathname === navLink.path ? 'current-location' : ''} 
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;