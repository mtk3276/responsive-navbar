import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

// Function to render the navigation links
const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const listClassName = isMobile ? "nav__list" : "nav__list__web";

  return (
    <ul className={listClassName}>
      <li className="nav__item">
        <NavLink to="/" className="nav__link" onClick={closeMobileMenu}>
            Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/worksheet" className="nav__link" onClick={closeMobileMenu}>
            Worksheet
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/settings" className="nav__link" onClick={closeMobileMenu}>
            Settings
        </NavLink>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
}

export default NavLinks;
