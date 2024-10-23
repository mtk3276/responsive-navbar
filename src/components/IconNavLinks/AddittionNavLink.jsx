import { NavLink } from "react-router-dom";
import AddIcon from "../../icons/AddIcon";

export default function AddittionNavLink({ onClick }) {
    return (
        <NavLink aria-label="worksheet" to="/worksheet" onClick={onClick}>
            {({ isActive }) =>  (
                <AddIcon fill={isActive ? "var(--second-color)" : "var(--first-color)"}/>
            )}
        </NavLink>
    )
}