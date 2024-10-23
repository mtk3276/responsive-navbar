import "./IconNavLinks.css";
import HomeNavLink from "./HomeNavLink";
import AddittionNavLink from "./AddittionNavLink";
import SettingsNavLink from "./SettingsNavLink";
import PropTypes from "prop-types";

export default function IconNavLinks({ isMobile, closeMobileMenu }) {
  const listClassName = isMobile ? "nav__list" : "nav__list__web";

  return (
    <ul className={listClassName}>
        <li className="nav__item">
          <HomeNavLink aria-label="home" className="nav__link" onClick={closeMobileMenu} />
        </li>
        <li className="nav__item">
          <AddittionNavLink aria-label="worksheet" className="nav__link" onClick={closeMobileMenu} />
        </li>
        <li className="nav__item">
          <SettingsNavLink aria-label="settings" className="nav__link" onClick={closeMobileMenu} />
        </li>
    </ul>
  );
};

IconNavLinks.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
};
