import { Grid, Typography } from "@mui/material"
import { SkillBox, SkillBoxImage } from "../styles"


const SkillList = () => {
    return(
        <Grid container spacing={3}>
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Frontend" iconPath="/img/skills/front.png" />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Backend" iconPath="/img/skills/back.png" />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Automation" iconPath="/img/skills/automation.png" />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="IoT" iconPath="/img/skills/iot.png" />}
            />
        </Grid>
    )
}

interface TSkillProps {
    description: string;
    iconPath: string;
}

const Skill = ({ description, iconPath }:TSkillProps) => {
    return(
        <SkillBox>
            <SkillBoxImage src={iconPath}/>
            <Typography 
                variant="h6" 
                textAlign="center"
                fontWeight={500} 
            >{ description.toUpperCase() }</Typography>
        </SkillBox>
    )
}

export default SkillList