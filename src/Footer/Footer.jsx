import React from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.png';
import footerlogo1 from '../assets/footerlogo1.png';
import footerlogo2 from '../assets/footerlogo2.png';
import footerlogo3 from '../assets/footerlogo3.png';
import './Footer.css'; // Add this line to import the CSS

function Footer() {
  return (
    <footer className="footer p-4" style={{ backgroundColor: '#223466', marginTop: '70px' }}>
      <div className="container border-bottom pb-4">
        <div className="mb-4">
          <img src={footerlogo} alt="Footer Logo" className="footer-logo" />
        </div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-4 mb-4" id='ci-foot'>
            <p className="footer-desc">
              A leading insurance consultancy providing comprehensive general insurance solutions to SME segments with 30+ years of expertise across all lines of business.
            </p>

            <div className="d-flex align-items-start mt-3">
              <img src={footerlogo1} alt="Phone" className="footer-icon" />
              <span className="footer-text">+91 9155911770</span>
            </div>

            <div className="d-flex align-items-start mt-3 flex-wrap">
              <img src={footerlogo2} alt="Email" className="footer-icon" />
              <div>
                <span className="footer-text pr-divider">sim@innovgeninsure.com</span>
                <span className="footer-text pl-divider">www.innovgeninsure.com</span>
              </div>
            </div>

            <div className="d-flex align-items-start mt-3">
              <img src={footerlogo3} alt="Address" className="footer-icon" />
              <div className="footer-text">
                F1, B Block, Madhura Apartment,<br />
                Lake View Garden, North Karistur,<br />
                Chennai - 600070
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-4 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled mt-3" style={{ lineHeight: '2.2' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Products Offered</Link></li>
              <li><Link to="/contacts" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-6 col-md-3 col-lg-4 mb-4">
            <h5 className="footer-heading">Our Services</h5>
            <div className="mt-3" style={{ lineHeight: '2.2' }}>
              <p className="footer-service">Risk Management Solutions</p>
              <p className="footer-service">Insurance Portfolio Analysis</p>
              <p className="footer-service">Insurance Consulting</p>
              <p className="footer-service">Claims Management</p>
              <p className="footer-service">Professional Expertise</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-4">
        <p className="footer-bottom">© 2024 InnovGen Insurance Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
