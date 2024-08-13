import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import { StyledSection } from "./styles"
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';

const Home = () => {
    return(
        <StyledSection component="section">
            <Container sx={{ height: "100%" }}>
                <Grid container spacing={10} sx={{ height: "100%" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Stack gap={2} justifyContent="center" height="100%">
                            <Typography variant="h4">Hello, I'm</Typography>
                            <Typography variant="h2" fontWeight={700}>Murylo Saladino</Typography>
                            <Typography>
                                Fullstack developer, ready for object-oriented programming
                                such as functional programming, with vast context in the IT 
                                world, including Web Development, IoT and Data Analysis.
                            </Typography>
                            <Stack flexDirection="row" gap={3}>
                                <Button variant="contained" size="large">AboutMe<PersonIcon sx={{ ml: 1 }}/></Button>
                                <Button variant="outlined" size="large">Projects<FolderIcon sx={{ ml: 1 }}/></Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>

                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    )
}

export default Home