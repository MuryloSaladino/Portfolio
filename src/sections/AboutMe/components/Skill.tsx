import { SkillBox, SkillBoxImage } from "../styles"
import { Typography } from "@mui/material";

type TSkillProps = {
    description: string;
    iconPath: string;
}

const Skill = ({ description, iconPath }:TSkillProps) => {

    return(
        <SkillBox>
            <SkillBoxImage src={iconPath}/>
            <Typography 
                variant="h5" 
                textAlign="center"
                fontWeight={500} 
            >{ description.toUpperCase() }</Typography>
        </SkillBox>
    )
}

export default Skill