import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: 12,
    zIndex: 100,
    boxShadow: 'none',
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(6px)",
    position: "sticky",
    borderBottom: `2px solid ${theme.palette.primary.main}`
}))