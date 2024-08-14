import { useEffect, useRef, useState } from "react"
import { StyledTechIcon, StyledTechList } from "../styles"
import { Tooltip } from "@mui/material"
import Marquee from "react-fast-marquee"

const TechList = () => {

    const [icons, setIcons] = useState<string[]>([])
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        (async () => {
            const images = import.meta.glob<{ default: string }>("../../../assets/img/tech/*.{svg,}")
            const loadedImages = await Promise.all(Object.keys(images).map(async (url) => (await images[url]()).default))
            
            setIcons(loadedImages)
        })()
    }, [])

    return(
        <Marquee pauseOnHover gradient gradientColor="#1A1A29" gradientWidth={50}>
            <StyledTechList component="ul" ref={ref}>
                {icons.map((src, index) => (
                    <Tooltip key={index} title={src.substring(21, src.indexOf("."))}>
                        <StyledTechIcon src={src}/>
                    </Tooltip>
                ))}
            </StyledTechList>
        </Marquee>
    )
}

export default TechList