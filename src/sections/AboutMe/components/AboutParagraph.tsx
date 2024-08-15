import { Typography } from "@mui/material"
import { PurpleText } from "../styles"

const AboutParagraph = () => {
    return(
        <Typography variant="body1">
            I'm software engineering with a passion for coding in its many areas.
            I've studied and practiced a lot in the last years to develop myself as
            a web developer, and ended up learning a lot about other areas, especially
            IoT. It's hard to decide my favorite technology, but I have a special place 
            in my heart for the ones that I learned first:<PurpleText> React </PurpleText> 
            in Frontend,<PurpleText> SpringBoot </PurpleText>in backend and 
            <PurpleText> Arduino with C++ </PurpleText>in IoT. 
        </Typography>
    )
}

export default AboutParagraph