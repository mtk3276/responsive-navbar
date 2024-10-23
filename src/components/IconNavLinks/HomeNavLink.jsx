import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";

export default function HomeNavLink({ onClick }) {
    return (
        <NavLink aria-label="home" to="/" onClick={onClick}>
            {({ isActive }) =>  (
                <HomeIcon data-testid="home-icon" fill={isActive ? "var(--second-color)" : "var(--first-color)"}/>
            )}
        </NavLink>
    )
}

HomeNavLink.propTypes = {
    onClick: PropTypes.func.isRequired,
};
