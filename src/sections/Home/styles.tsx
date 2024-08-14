import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    padding: "30px 0",
}))


export const StyledTechList = styled(Box)(() => ({
    display: "flex",
    gap: 40,
    height: 150,
    padding: 20,
    overflow: "hidden",
    scrollBehavior: "smooth"
}))

export const StyledTechIcon = styled("img")(() => ({
    width: 75
}))