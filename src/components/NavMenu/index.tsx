import { StyledLink, StyledResponsiveBox } from "./styles"

const NavMenu = () => {


    return(
        <>
            <input id="headerMenuToggle" style={{ display: 'none' }} type="checkbox"/>
            <StyledResponsiveBox>
                <StyledLink>About</StyledLink>
                <StyledLink>Projects</StyledLink>
                <StyledLink>Technologies</StyledLink>
            </StyledResponsiveBox>
        </>
    )
}

export default NavMenu