import Header from "./components/Header"
import AboutMe from "./sections/AboutMe"
import Home from "./sections/Home"
import { Box, Stack } from "@mui/material"

function App() {

    return(
        <Box sx={{ bgcolor: 'background.default' }}>
            <Header/>
            <Stack gap={10}>
                <Home/>
                <AboutMe/>
            </Stack>
        </Box>
    )
}

export default App