import { styled } from "@mui/material";
import PropTypes from "prop-types";

export default function StyledSvgIcon({ fill = "white", children, ...props }) {

    const StyledSvg = styled('svg')({
        width: '100px',
        height: 'auto',
        fill: fill,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
        transform: 'scale(1.1)', // Add hover effects if needed
        },
    });

    return (
        <StyledSvg
            {...props}
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 500 500" 
            style={{ enableBackground: 'new 0 0 500 500' }} 
            xmlSpace="preserve">
                {children}
        </StyledSvg>
    )
}

StyledSvgIcon.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    fill: PropTypes.string,
}