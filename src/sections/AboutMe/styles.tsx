import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0"
}))

export const PurpleText = styled("b")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600
}))