import { styled } from "@mui/material";

interface IStyledIconContainerProps {
    open: boolean;
}

export const StyledIconContainer = styled('div')<IStyledIconContainerProps>( ({ open }) => ({
    display: 'flex'
}))

export const StyledLine = styled('span')`
    width: 100%;
    height: 3px;
    background-color: white;
`