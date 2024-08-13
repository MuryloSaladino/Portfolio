import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7562E0",
            dark: "#000036",
        },
        secondary: {
            main: "#282162"
        },
        info: {
            main: "#f0f0f0"
        },
        background: {
            default: "#181824",
            paper: "#1A1A29"
        }
    }
})

export default theme