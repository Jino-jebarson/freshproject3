import footerlogo from '../assets/footerlogo.png';
import footerlogo1 from '../assets/footerlogo1.png';
import footerlogo2 from '../assets/footerlogo2.png';
import footerlogo3 from '../assets/footerlogo3.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="p-4" style={{ backgroundColor: '#223466', marginTop: '70px' }}>
      <div className="container border-bottom pb-4">
        <div className="mb-4">
          <img src={footerlogo} alt="Footer Logo" style={{ maxWidth: '180px' }} />
        </div>

        {/* Responsive 3-column layout */}
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '15px',
              lineHeight: '26px',
              color: '#ffffff'
            }}>
              A leading insurance consultancy providing comprehensive general insurance solutions to SME segments with 30+ years of expertise across all lines of business.
            </p>

            {/* Contact Info */}
            <div className="d-flex align-items-start mt-3">
              <img src={footerlogo1} alt="Phone" style={{ marginRight: '15px' }} />
              <span style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '14px' }}>
                +91 9155911770
              </span>
            </div>

            <div className="d-flex align-items-start mt-3 flex-wrap">
              <img src={footerlogo2} alt="Email" style={{ marginRight: '15px' }} />
              <div>
                <span style={{
                  color: '#fff', fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px', paddingRight: '10px', borderRight: '1px solid #fff'
                }}>
                  sim@innovgeninsure.com
                </span>
                <span style={{
                  color: '#fff', fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px', paddingLeft: '10px'
                }}>
                  www.innovgeninsure.com
                </span>
              </div>
            </div>

            <div className="d-flex align-items-start mt-3">
              <img src={footerlogo3} alt="Address" style={{ marginRight: '15px' }} />
              <div style={{ color: '#fff', fontSize: '14px', fontFamily: "'Montserrat', sans-serif" }}>
                F1, B Block, Madhura Apartment,<br />
                Lake View Garden, North Karistur,<br />
                Chennai - 600070
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-4 mb-4">
            <h5 style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '16px', fontWeight: '700' }}>
              Quick Links
            </h5>
            <ul className="list-unstyled mt-3" style={{ lineHeight: '2.2' }}>
              <li><Link to="/" style={linkStyle}>Home</Link></li>
              <li><Link to="/about" style={linkStyle}>About Us</Link></li>
              <li><Link to="/services" style={linkStyle}>Products Offered</Link></li>
              <li><Link to="/contacts" style={linkStyle}>Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-6 col-md-3 col-lg-4 mb-4">
            <h5 style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '16px', fontWeight: '700' }}>
              Our Services
            </h5>
            <div className="mt-3" style={{ lineHeight: '2.2' }}>
              <p style={textStyle}>Risk Management Solutions</p>
              <p style={textStyle}>Insurance Portfolio Analysis</p>
              <p style={textStyle}>Insurance Consulting</p>
              <p style={textStyle}>Claims Management</p>
              <p style={textStyle}>Professional Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="container text-center mt-4">
        <p style={{
          color: '#ffffff',
          fontSize: '14px',
          fontFamily: "'Montserrat', sans-serif",
          margin: 0
        }}>
          © 2024 InnovGen Insurance Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Shared Styles
const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '14px',
  fontFamily: "'Montserrat', sans-serif"
};

const textStyle = {
  color: '#ffffff',
  fontSize: '14px',
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: '6px'
};

export default Footer;
