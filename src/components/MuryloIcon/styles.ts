import { IconButton, styled } from "@mui/material";

export const StyledLink = styled('a')`
    color: black;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 8px;

    transition: 0.15s;

    &:hover{
        transform: scale(1.1);
    }
`

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    height: 'max-content',
    backgroundColor: theme.palette.primary.main,
    padding: 4,
    ':hover': {
        backgroundColor: theme.palette.secondary.main
    }
}))