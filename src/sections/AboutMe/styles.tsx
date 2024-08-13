import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "30px 0"
}))