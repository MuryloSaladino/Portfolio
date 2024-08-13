import { Container, Typography } from "@mui/material"
import { StyledSection } from "./styles"

const AboutMe = () => {


    return(
        <StyledSection sx={{ minHeight: "100vh" }}>
            <Container>
                <Typography variant="h4" color="primary.main">About Me</Typography>

            </Container>
        </StyledSection>
    )
}

export default AboutMe