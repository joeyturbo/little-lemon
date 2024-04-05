import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import footerLogo from './assets/logo-white.png';
import './Footer.css'
import pages from '../../utilities/pages';

const contacts = [
  { icon: faLocationDot, data: '254 Main St, Chicago, IL 60600', },
  { icon: faPhone, data: '(222) 555-5553', },
  { icon: faEnvelope, data: 'contact@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container grid">
        <img 
          className="logo" 
          src={footerLogo} 
          alt="Little Lemon" 
        />
        <nav className="footer__nav">
          <h4 className="uppercase">Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path} className="footer__nav-links">{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="footer__contact-info">
          <h4 className="uppercase">Contact us</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.data}
            </p>
          )}
          </address>
        </div>
        <div className="footer__socials">
          <h4 className="uppercase">Connect with us</h4>
          <div className="footer__social-icons">
            {socials.map((social, index) => 
              <a 
                key={index} 
                href={`https://www.${social.name}.com`} 
                target="_blank" 
                rel="noreferrer" 
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />   
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;