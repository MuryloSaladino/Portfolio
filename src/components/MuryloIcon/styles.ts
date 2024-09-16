import { IconButton, MenuItem, styled } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    transition: "0.2s",
    ':hover': {
        backgroundColor: theme.palette.primary.main
    }
}))

export const StyledLink = styled("a")(() => ({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "0.15s",
    
    ':hover': {
        tranform: "scale(1.1)"
    }
}))


export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    height: 'max-content',
    backgroundColor: theme.palette.primary.main,
    padding: 4,

    ':hover': {
        backgroundColor: theme.palette.secondary.main
    }
}))