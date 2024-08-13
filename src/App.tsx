import Header from "./components/Header"
import AboutMe from "./sections/AboutMe"
import Home from "./sections/Home"
import { Stack } from "@mui/material"

function App() {

    return(
        <Stack sx={{ bgcolor: 'background.default' }}>
            <Header/>
            <Home/>
            <AboutMe/>
        </Stack>
    )
}

export default App