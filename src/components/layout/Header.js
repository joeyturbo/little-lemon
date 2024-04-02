import './Header.css';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';
import { pages } from '../../utilities/pages'

function Header() {
  return (
    <>
      <header>
        <nav className="navbar container grid"> 
          <a href="/">
            <img className="navbar__logo" src={logo} alt="logo"/>
          </a>
          {/* {nav items} */}
          <ul className="navbar__links"> 
            {pages.map((link, index) => 
              <li key={index}><Link to={link.url} className="text-dark fs-400">{link.name}</Link></li>
            )}
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header;