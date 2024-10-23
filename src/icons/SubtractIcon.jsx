import StyledSvgIcon from "./StyledSvgIcon";

export default function SubtractIcon({ fill = "white" }) {
    return (
        <StyledSvgIcon fill={fill}>
            <path d="M475,325H25c-13.807,0-25-11.193-25-25V200c0-13.807,11.193-25,25-25h450c13.807,0,25,11.193,25,25v100C500,313.807,488.807,325,475,325z"/>
        </StyledSvgIcon>
    )
}