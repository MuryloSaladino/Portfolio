import { StyledTechIcon, StyledTechList } from "../styles"
import { Tooltip } from "@mui/material"
import Marquee from "react-fast-marquee"

import { v4 as uuid } from "uuid"

import techs from "../techs.json"


const TechList = () => {
    return(
        <Marquee pauseOnHover gradient gradientColor="#1A1A29" gradientWidth={50}>
            <StyledTechList component="ul">
                {techs.map( tech => (
                    <Tooltip key={uuid()} title={tech.name}>
                        <StyledTechIcon src={tech.path}/>
                    </Tooltip>
                ))}
            </StyledTechList>
        </Marquee>
    )
}

export default TechList