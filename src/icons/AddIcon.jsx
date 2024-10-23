import StyledSvgIcon from "./StyledSvgIcon"

export default function AddIcon({ fill = "white", ...props }) {
    return (
        <StyledSvgIcon fill={fill} {...props}>
            <path d="M471.43,175H325V28.57C325,12.79,311.83,0,295.59,0h-91.18C188.17,0,175,12.79,175,28.57V175H28.57
            C12.79,175,0,188.17,0,204.41v91.18C0,311.83,12.79,325,28.57,325H175v146.43c0,15.78,13.17,28.57,29.41,28.57h91.18
            c16.24,0,29.41-12.79,29.41-28.57V325h146.43c15.78,0,28.57-13.17,28.57-29.41v-91.18C500,188.17,487.21,175,471.43,175z"/>
        </StyledSvgIcon>
    )
}