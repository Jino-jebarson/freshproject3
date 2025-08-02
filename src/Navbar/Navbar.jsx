import { Link } from "react-router-dom";
import logo  from '../assets/logo.png'
import '../Navbar/Navbar.css';
function Navbar(){
    return(
        <>
        <section>
      <div id='navbar-container'>
        <nav className="navbar navbar-expand-md mt-0">
      <div className="container-xl d-flex align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#links"
          aria-controls="links"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="links" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav d-flex flex-column flex-md-row align-items-start align-items-md-center gap-0 gap-md-5 mb-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-decoration-none nav-link-custom"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#353535',
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-decoration-none nav-link-custom"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#353535',
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link text-decoration-none nav-link-custom"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#353535',
                }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link text-decoration-none nav-link-custom"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#353535',
                }}
              >
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contacts"
                className="nav-button"
               
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    </section>
        </>
    )
}
export default Navbar;