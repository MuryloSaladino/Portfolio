import { styled } from "@mui/material";

export const StyledLinkList = styled('div')`

    display: flex;
    align-items: center;
    gap: 20px;

    @media(max-width: 500px) {
        flex-direction: column;
    }
`

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