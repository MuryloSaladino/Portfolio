import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    height: "80vh",
    minHeight: "600px",
    position: "relative",
    padding: "30px 0",
    overflow: "hidden",
}))

export const StyledTechList = styled(Box)(({}) => ({
    display: "flex",
    gap: 3,
    height: 100,
}))