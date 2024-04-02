import './Header.css';
import logo from './assets/Logo.svg';

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
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header;