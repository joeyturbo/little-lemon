import footerLogo from './assets/logo-white.png';
import './Footer.css'

// const contacts = [
//   { icon: faLocationDot, data: '254 Main St, Chicago, IL 60600', },
//   { icon: faPhone, data: '(222) 555-5553', },
//   { icon: faEnvelope, data: 'contact@littlelemon.com', },
// ];

// const socials = [
//   { icon: faFacebook, name: 'facebook', },
//   { icon: faTwitter, name: 'twitter', },
//   { icon: faInstagram, name: 'instagram', },
//   { icon: faYoutube, name: 'youtube', },
// ];


function Footer() {
  return (
    <footer className="footer">
        <div className="container grid">
          <img src={footerLogo} className="logo" alt="logo"/>
          <nav className="footer__nav">
            <h4>Sitemap</h4>
           
          </nav>
          <div className="footer__contact-info">
            <h4>Contact Us</h4>
          </div>
          <div className="footer__socials">
            <h4>Connect</h4>
          </div>
        </div>


    </footer>
  )
}

export default Footer;