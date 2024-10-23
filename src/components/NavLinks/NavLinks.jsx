import { NavLink } from "react-router-dom";
import "./NavLinks.css";

// Function to render the navigation links
const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const listClassName = isMobile ? "nav__list" : "nav__list__web";

  return (
    <ul className={listClassName}>
      <li className="nav__item">
        <NavLink to="/" className="nav__link">
            Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/worksheet" className="nav__link">
            Worksheet
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/settings" className="nav__link">
            Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
