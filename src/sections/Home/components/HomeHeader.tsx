import { Button, Stack, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';

const HomeHeader = () => {
    return(
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
    )
}

export default HomeHeader