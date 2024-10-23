import PropTypes from 'prop-types';
import StyledSvgIcon from "./StyledSvgIcon";

export default function DivideIcon({ fill = "White" }) {
    return (
        <StyledSvgIcon fill={fill}>
            <path d="M475,175H25c-13.807,0-25,11.193-25,25v100c0,13.807,11.193,25,25,25h450c13.807,0,25-11.193,25-25V200C500,186.193,488.807,175,475,175z"/>
	        <path d="M250,350L250,350c-41.421,0-75,33.579-75,75v0c0,41.421,33.579,75,75,75h0c41.421,0,75-33.579,75-75v0C325,383.579,291.421,350,250,350z"/>
	        <path d="M250,150L250,150c41.421,0,75-33.579,75-75v0c0-41.421-33.579-75-75-75h0c-41.421,0-75,33.579-75,75v0C175,116.421,208.579,150,250,150z"/>
        </StyledSvgIcon>
    )
}

DivideIcon.propTypes = {
    fill: PropTypes.string,
};
