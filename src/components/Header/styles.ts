import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    padding: 12,
    zIndex: 100
}))