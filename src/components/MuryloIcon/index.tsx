import { Avatar, Menu, Tooltip, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import githubSrc from "../../assets/img/github.png"
import linkedinSrc from "../../assets/img/linkedin.png"
import { StyledIconButton, StyledLink, StyledMenuItem } from "./styles";

interface IMuryloIconProps {
    width?: number | string;
    heigth?: number | string;
}

const MuryloIcon = ({ width, heigth }:IMuryloIconProps) => {

    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <Fragment>
            <Tooltip title="Murylo Saladino">
                <StyledIconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                    <Avatar
                        src="https://media.licdn.com/dms/image/D4D03AQEawyk3Dl8laA/profile-displayphoto-shrink_800_800/0/1687554115125?e=1726099200&v=beta&t=L36AtbYTEFlQDskj7hjjBs3DkpiTxtvEF6KcO-KwCJ4"
                        sx={{ width: width || "50px", height: heigth || "50px" }}
                    />
                </StyledIconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ sx: { bgcolor: "primary.dark" } }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <StyledLink target="_blank" href="https://www.linkedin.com/in/murylo-saladino/">
                        <Avatar src={linkedinSrc} sx={{ width: "30px", height: "30px" }}/>
                        <Typography variant="h6">LinkedIn</Typography>
                    </StyledLink>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleClose}>
                    <StyledLink target="_blank" href="https://github.com/MuryloSaladino">
                        <Avatar src={githubSrc} sx={{ width: "30px", height: "30px" }}/>
                        <Typography variant="h6">Github</Typography>
                    </StyledLink>
                </StyledMenuItem>
            </Menu>
        </Fragment>
    )
}

export default MuryloIcon