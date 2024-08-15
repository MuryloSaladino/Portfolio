import { Grid, Typography } from "@mui/material"
import FrontIcon from "../../../assets/img/skills/front.png"
import AutomationIcon from "../../../assets/img/skills/automation.png"
import BackIcon from "../../../assets/img/skills/back.png"
import IotIcon from "../../../assets/img/skills/iot.png"
import { SkillBox, SkillBoxImage } from "../styles"

const SkillList = () => {
    return(
        <Grid container spacing={3}>
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Frontend" iconPath={FrontIcon} />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Backend" iconPath={BackIcon} />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="Automation" iconPath={AutomationIcon} />}
            />
            <Grid 
                item xs={6} sm={3} md={3} lg={3} xl={3}
                children={<Skill description="IoT" iconPath={IotIcon} />}
            />
        </Grid>
    )
}

type TSkillProps = {
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