import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: 'transparent',
    padding: 12,
    zIndex: 100,
    boxShadow: 'none',
    backdropFilter: "blur(6px)",
    '-webkit-backdrop-filter': "blur(6px)",
    position: "sticky",
}))