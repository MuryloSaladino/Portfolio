import { StyledLink, StyledLinkList } from "./styles"

const NavMenu = () => {


    return(
        <>
            <input id="headerMenuToggle" style={{ display: 'none' }} type="checkbox"/>
            <StyledLinkList>
                <StyledLink>About</StyledLink>
                <StyledLink>Projects</StyledLink>
                <StyledLink>Technologies</StyledLink>
            </StyledLinkList>
        </>
    )
}

export default NavMenu