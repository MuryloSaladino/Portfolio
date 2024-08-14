import { useEffect, useState } from "react"
import { StyledTechList } from "../styles"

const TechList = () => {

    const [icons, setIcons] = useState<string[]>([])

    useEffect(() => {
        (async () => {
            const images = import.meta.glob<{ default: string }>("../../../assets/img/tech/*.{svg,}")
            const loadedImages = await Promise.all(Object.keys(images).map(async (url) => (await images[url]()).default))
            
            setIcons(loadedImages)
        })()
    }, [])

    return(
        <StyledTechList component="ul">
            {icons.map((src, index) => (
                <img key={index} src={src}/>
            ))}
        </StyledTechList>
    )
}

export default TechList