import { Grid } from "@mui/material"
import Skill from "./Skill"
import FrontIcon from "../../../assets/img/skills/front.png"
import AutomationIcon from "../../../assets/img/skills/automation.png"
import BackIcon from "../../../assets/img/skills/back.png"
import IotIcon from "../../../assets/img/skills/iot.png"

const SkillList = () => {
    return(
        <Grid container spacing={3}>
            <Grid 
                item xs={12} sm={6} md={4} lg={3} xl={3}
                children={<Skill description="Frontend" iconPath={FrontIcon} />}
            />
            <Grid 
                item xs={12} sm={6} md={4} lg={3} xl={3}
                children={<Skill description="Backend" iconPath={BackIcon} />}
            />
            <Grid 
                item xs={12} sm={6} md={4} lg={3} xl={3}
                children={<Skill description="Tasks Automation" iconPath={AutomationIcon} />}
            />
            <Grid 
                item xs={12} sm={6} md={4} lg={3} xl={3}
                children={<Skill description="IoT" iconPath={IotIcon} />}
            />
        </Grid>
    )
}

export default SkillList