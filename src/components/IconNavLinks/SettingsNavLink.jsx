import { NavLink } from "react-router-dom";
import SettingsIcon from "../../icons/SettingsIcon";
import PropTypes from "prop-types";

export default function SettingsNavLink({ onClick }) {
    return (
        <NavLink aria-label="settings" to="/settings" onClick={onClick}>
            {({ isActive }) =>  (
                <SettingsIcon fill={isActive ? "var(--second-color)" : "var(--first-color)"}/>
            )}
        </NavLink>
    )
}

SettingsNavLink.propTypes = { 
    onClick: PropTypes.func.isRequired,
};
