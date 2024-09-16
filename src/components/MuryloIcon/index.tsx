import { StyledIconButton, StyledLink, StyledMenuItem } from "./styles";
import { Avatar, Menu, Tooltip, Typography } from "@mui/material"

import { Fragment, useState } from "react"


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
                        src="/img/profile.png"
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
                        <Avatar src="/img/github.png" sx={{ width: "30px", height: "30px" }}/>
                        <Typography variant="h6">LinkedIn</Typography>
                    </StyledLink>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleClose}>
                    <StyledLink target="_blank" href="https://github.com/MuryloSaladino">
                        <Avatar src="/img/github.png" sx={{ width: "30px", height: "30px" }}/>
                        <Typography variant="h6">Github</Typography>
                    </StyledLink>
                </StyledMenuItem>
            </Menu>
        </Fragment>
    )
}

export default MuryloIcon