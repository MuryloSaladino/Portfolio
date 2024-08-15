import { useState } from "react";
import { StyledIconButton, StyledLink, StyledLinkList } from "./styles"
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <StyledIconButton onClick={() => setOpen(prev => !prev)}>
                <MenuIcon fontSize="large" color="info"/>
            </StyledIconButton>
            <StyledLinkList open={open}>
                <StyledLink href="#home">Home</StyledLink>
                <StyledLink href="#about">About</StyledLink>
                <StyledLink href="#projects">Projects</StyledLink>
                <StyledLink href="#technologies">Technologies</StyledLink>
            </StyledLinkList>
        </>
    )
}

export default NavMenu