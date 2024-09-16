import { Box, IconButton, styled } from "@mui/material";

type TStyledLinkListProps = {
    open: boolean;
}

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    
    [theme.breakpoints.down("sm")]: {
        display: "block",
        position: "fixed",
        top: 15,
        right: 15,
    }
}))

export const StyledLinkList = styled(Box)<TStyledLinkListProps>(({ theme, open }) => ({
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
    gap: 20,
    transition: "0.5s",

    [theme.breakpoints.down("sm")]: {
        position: "fixed",
        zIndex: -10,
        top: 0,
        right: 0,
        width: "100vw",
        height: "40vh",
        backgroundColor: theme.palette.background.default,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        padding: 20,
        transform: `translateY(${!open && "-500px"})`,

        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    }
}))

export const StyledLink = styled("a")(() => ({
    fontSize: "1.25rem",
    color: "white",
    textDecoration: "none",
    position: "relative",

    '::after': {
        content: "''",
        position: "absolute",
        transition: "0.3s",

        backgroundColor: "white",
        width: 0,
        height: "2px",
        
        top: "110%",
        left: 0,
        right: 0,
        margin: "auto",
    },
    ':hover::after': {
        width: "100%",
    }
}))