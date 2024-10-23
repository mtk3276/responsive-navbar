import PropTypes from 'prop-types';
import StyledSvgIcon from "./StyledSvgIcon";

export default function HomeIcon({ fill = "white", ...props }) {
    return (
        <StyledSvgIcon fill={fill} {...props}>
            <path d="M425,300H75c-13.807,0-25,11.193-25,25v150c0,13.807,11.193,25,25,25h350c13.807,0,25-11.193,25-25V325
            C450,311.193,438.807,300,425,300z"/>
            <path d="M491.856,204.226L266.509,6.063c-9.44-8.301-23.577-8.301-33.017,0L8.144,204.227C-9.168,219.45,1.599,248,24.653,248
            h450.694C498.401,248,509.168,219.45,491.856,204.226z"/>
        </StyledSvgIcon>
    )   
}

HomeIcon.propTypes = {
    fill: PropTypes.string,
};
