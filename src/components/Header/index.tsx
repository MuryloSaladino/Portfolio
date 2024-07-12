import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import MuryloIcon from "../MuryloIcon";
import NavMenu from "../NavMenu";

function Header() {

    return ( 
        <AppBar>
            <Toolbar>
                <Container maxWidth="xl">
                    <Stack flexDirection="row" justifyContent="space-between">
                        <NavMenu/>
                        <MuryloIcon/>
                    </Stack>
                </Container>
            </Toolbar>        
        </AppBar>
    );
}

export default Header;