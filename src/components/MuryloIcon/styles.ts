import { styled } from "@mui/material";

export const StyledLink = styled('a')`
    color: black;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 8px;

    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
    }
`