import { Container, Stack, Typography } from "@mui/material"
import { StyledSection } from "./styles"
import AboutParagraph from "./components/AboutParagraph"
import SkillList from "./components/SkillList"

const AboutMe = () => {


    return(
        <StyledSection>
            <Container>
                <Stack gap={3}>
                    <Typography variant="h4" color="primary.main" fontWeight={600}>About Me</Typography>
                    <AboutParagraph/>
                    <SkillList/>
                </Stack>
            </Container>
        </StyledSection>
    )
}

export default AboutMe