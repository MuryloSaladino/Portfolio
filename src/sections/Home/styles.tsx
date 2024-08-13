import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    height: "75vh",
    minHeight: "600px",
    position: "relative",
    padding: "30px 0",
    overflow: "hidden"
}))