import { Container, Stack, Toolbar } from "@mui/material";
import MuryloIcon from "../MuryloIcon";
import NavMenu from "../NavMenu";
import { StyledAppBar } from "./styles";

function Header() {

    return ( 
        <StyledAppBar color="primary">
            <Toolbar>
                <Container maxWidth="xl">
                    <Stack flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <MuryloIcon/>
                        <NavMenu/>
                    </Stack>
                </Container>
            </Toolbar>        
        </StyledAppBar>
    );
}

export default Header;