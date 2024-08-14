import { Container, Grid } from "@mui/material"
import { StyledSection } from "./styles"
import HomeHeader from "./components/HomeHeader"
import TechList from "./components/TechList"


const Home = () => {
    return(
        <StyledSection component="section">
            <Container sx={{ height: "100%" }}>
                <Grid container spacing={10} sx={{ height: "100%" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <HomeHeader/>
                    </Grid>
                    <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
                        
                    </Grid>
                </Grid>
                <TechList/>
            </Container>
        </StyledSection>
    )
}

export default Home