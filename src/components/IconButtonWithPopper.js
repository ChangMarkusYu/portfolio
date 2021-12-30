import React, { useState } from "react";
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const FlexPopper = ({open, anchorEl, text, placement}) => {
    return (
        <Popper 
            open={open} 
            anchorEl={anchorEl} 
            placement={placement}
            style={{zIndex: 2000}}>
            <Paper>
                <Typography sx={{px:2, py:1}}>{text}</Typography>
            </Paper>
        </Popper>
    )
}

export const IconButtonWithPopper = ({popperText, IconComponent, iconSrc, href, placement}) =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const onMouseOver = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    const onMouseLeave = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    return(
        <>
        <FlexPopper 
            open={open} 
            anchorEl={anchorEl} 
            text={popperText} 
            placement={placement}/>
        <IconButton
            href={href}
            target={href && "_blank"}
            rel={href && "noreferrer"}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}>
            {iconSrc ? <IconComponent src={iconSrc}/> : <IconComponent/>}
        </IconButton>
        </>
    )
}