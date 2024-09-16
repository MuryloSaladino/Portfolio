import { StyledIconButton, StyledLink, StyledMenuItem } from "./styles";
import { Avatar, ClickAwayListener, Grow, MenuList, Paper, Popper, Tooltip, Typography } from "@mui/material"

import { Fragment, SyntheticEvent, useRef, useState } from "react"


interface IMuryloIconProps {
    width?: number | string;
    heigth?: number | string;
}

const MuryloIcon = ({ width, heigth }:IMuryloIconProps) => {

    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null)
    
    const handleClose = (e:Event | SyntheticEvent) => {
        if(anchorRef.current && anchorRef.current.contains(e.target as HTMLElement)) {
            return
        }
        setOpen(false)
    }
    const handleToggle = () => setOpen(prev => !prev)

    return(
        <Fragment>
            <Tooltip title="Murylo Saladino">
                <StyledIconButton ref={anchorRef} onClick={handleToggle}>
                    <Avatar
                        src="/img/profile.png"
                        sx={{ width: width || "50px", height: heigth || "50px" }}
                    />
                </StyledIconButton>
            </Tooltip>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                    >
                        <Paper sx={{ bgcolor: "primary.dark" }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                >
                                    <StyledMenuItem onClick={handleClose}>
                                        <StyledLink target="_blank" href="https://www.linkedin.com/in/murylo-saladino/">
                                            <Avatar src="/img/linkedin.png" sx={{ width: "30px", height: "30px" }}/>
                                            <Typography variant="h6">LinkedIn</Typography>
                                        </StyledLink>
                                    </StyledMenuItem>

                                    <StyledMenuItem onClick={handleClose}>
                                        <StyledLink target="_blank" href="https://github.com/MuryloSaladino">
                                            <Avatar src="/img/github.png" sx={{ width: "30px", height: "30px" }}/>
                                            <Typography variant="h6">Github</Typography>
                                        </StyledLink>
                                    </StyledMenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Fragment>
    )
}

export default MuryloIcon