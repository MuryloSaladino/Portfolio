import { IconButton, styled } from "@mui/material";

type TStyledLinkListProps = {
    open: boolean;
}

export const StyledIconButton = styled(IconButton)`
    
    display: none;
    
    @media(max-width: 500px) {
        display: block;
        position: fixed;
        top: 15px;
        right: 15px;
    }
`

export const StyledLinkList = styled('div')<TStyledLinkListProps>(({ open, theme }) => `

    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 20px;
    transition: 0.3s;
    border-bottom: 2px solid ${theme.palette.primary.main};

    @media(max-width: 500px) {
        position: fixed;
        z-index: -10;
        top: 0;
        right: 0;
        width: 100vw;
        height: 40vh;
        background-color: ${theme.palette.background.default};
        padding: 20px;
        transform: translateY(${!open && "-300px"});

        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }
`)

export const StyledLink = styled('a')`
    font-size: 1.25rem;
    color: white;

    position: relative;
    
    &::after {   
        content: '';
        position: absolute;
        transition: 0.3s;

        background-color: white;
        width: 0;
        height: 2px;
        
        top: 110%;
        left: 0;
        right: 0;
        margin: auto;
    }

    &:hover::after {
        width: 100%;
    }
`