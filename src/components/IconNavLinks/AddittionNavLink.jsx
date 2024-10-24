import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AddIcon from "../../icons/AddIcon";

export default function AddittionNavLink({ onClick }) {
    return (
        <NavLink aria-label="worksheet" to="/worksheet" onClick={onClick}>
            {({ isActive }) =>  (
                <AddIcon data-testid="add-icon" fill={isActive ? "var(--second-color)" : "var(--first-color)"}/>
            )}
        </NavLink>
    )
}

AddittionNavLink.propTypes = {
    onClick: PropTypes.func.isRequired,
};
