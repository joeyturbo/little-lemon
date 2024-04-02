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
import { pages } from '../../utilities/pages';

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


function Footer() {
  return (
    <footer className="footer bg-dark text-white">
        <div className="container grid">
          <img src={footerLogo} className="logo" alt="logo"/>
          <nav className="footer__nav">
            <h4>Sitemap</h4>
            {pages.map((link, index) =>
              <p key={index} className="footer__nav-links"><Link to={link.url}>{link.name}</Link></p>
            )}
          </nav>
          <div className="footer__contact-info">
            <h4>Contact Us</h4>
            {contacts.map((item, index) => 
              <p key={index}><FontAwesomeIcon icon={item.icon} size="xs"/> {item.data}</p>
            )}
          </div>
          <div className="footer__socials">
            <h4>Connect</h4>
            {socials.map((item, index) => 
              <span key={index}><FontAwesomeIcon icon={item.icon} size="xl" /></span>
            )}
          </div>
        </div>


    </footer>
  )
}

export default Footer;