import '../css/Footer.css';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="container__footer" aria-label="Site footer">
      <section className="footer-hero">
        <div className="hero__footer">
          <ul className="social-links" aria-label="Social media">
            <li className="social-tag">
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="Facebook"><FaFacebook /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="X (formerly Twitter)"><FaTwitter /></a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">

            <ul className="company-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Company</h3></li>
              <li className="nav-link"><a href="#!">About Us</a></li>
              <li className="nav-link"><a href="#!">Locations</a></li>
              <li className="nav-link"><a href="#!">Delivery</a></li>
              <li className="nav-link"><a href="#!">Rewards</a></li>
            </ul>

            <ul className="services-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Services</h3></li>
              <li className="nav-link"><a href="#!">Catering</a></li>
              <li className="nav-link"><a href="#!">Careers</a></li>
              <li className="nav-link"><a href="#!">Charitable Opportunities</a></li>
              <li className="nav-link"><a href="#!">Merchandise</a></li>
              <li className="nav-link"><a href="#!">Contact Us</a></li>
            </ul>

             <ul className="resources-links">
                <li className="nav-links-title"><h3 className="nav-link-title">Resources</h3></li>
                <li className="nav-link"><a href="#!">Nutrition & Allergens</a></li>
                <li className="nav-link"><a href="#!">Events & Occassions</a></li>
                <li className="nav-link"><a href="#!">FAQ</a></li>
                <li className="nav-link"><a href="#!">Accessibility</a></li>
                <li className="nav-link"><a href="#!">Registration</a></li>
                <li className="nav-link"><a href="#!">Copyright & TOS</a></li>
            </ul>
          </nav>
          
        </div>
        
      </section>
      <div className="footer-img-wrapper"></div>
    </footer>
  );
}

export default Footer;