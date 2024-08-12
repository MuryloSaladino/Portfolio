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

export const StyledLinkList = styled('div')<TStyledLinkListProps>(({ open }) => `

    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 20px;
    transition: 0.3s;
    overflow: hidden;

    @media(max-width: 500px) {
        height: ${open ? 'max-content' : 0};
        width: "100%";

        flex-direction: column;
        align-items: flex-end;
        padding: ${open ? '20px' : '0'}; 
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