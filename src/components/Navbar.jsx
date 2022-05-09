import styled from '@emotion/styled'
import { AppBar, IconButton, Toolbar, InputBase, Badge, Avatar, Typography, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'
import { green } from '@mui/material/colors';
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "#282A35",
    height: "100px"
})

// const Search = styled("div")(({ theme }) => ({
//     backgroundColor: 'white',
//     width: '40%',
//     padding: '0 10px',
//     borderRadius: '5px'
// }))

const Search = styled("div")(({ theme }) => ({
    
    width: '40%',
    fontSize: '40px',
    fontStyle: 'italic',
    
}))
const Icon = styled(Box)(({ theme }) => ({
    // display: "none",
    gap: '20px',
    // [theme.breakpoints.up('sm')]: {
    //     display: "flex",
    // },

}))

const UserBox = styled(Box)(({ theme }) => ({
    // display: 'flex',
    gap: '10px',
    // [theme.breakpoints.up('sm')]: {
    //     display: 'none'
    // }
}))

export const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='sticky' >
            <StyledToolbar>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="http://localhost:3000/static/images/logo-white.png"
                        sx={{ width: 150, height: 50}}
                        variant="rounded"
                    
                    />


                </Box>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    Sologan cua cong ty
                </Search>

                <Icon sx={{ display: { xs: "none", sm: "flex" } }}>

                    <Badge badgeContent={4} color="error">
                        <EmailIcon />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: '25px', height: '25px' }} alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg" onClick={handleClick} />

                </Icon>

                <UserBox sx={{ display: { xs: "flex", sm: "none" } }} onClick={handleClick}>
                    <Avatar sx={{ width: '25px', height: '25px' }} alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg" />
                    <Typography >Hoang</Typography>
                </UserBox>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </StyledToolbar>

        </AppBar>
    )
}
