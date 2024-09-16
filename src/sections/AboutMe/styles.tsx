import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0"
}))

export const PurpleText = styled("b")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600
}))

export const SkillBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: 15,
    width: "100%",
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25
}))

export const SkillBoxImage = styled("img")(() => ({
    width: "50%",
    maxWidth: 200
}))