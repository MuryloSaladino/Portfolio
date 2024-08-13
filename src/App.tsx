import Header from "./components/Header"
import Home from "./sections/Home"
import { Stack } from "@mui/material"

function App() {

    return(
        <Stack sx={{ bgcolor: 'background.default' }}>
            <Header/>
            <Home/>
        </Stack>
    )
}

export default App