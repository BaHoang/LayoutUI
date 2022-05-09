import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react'
import styled from '@emotion/styled';

const StyledListItem = styled(ListItem)({
  "&.Mui-selected": {
    backgroundColor: "#04AA6D",
    color:"white",
    
  } 

})

// const StyledListItemIcon = styled(ListItem)({
//   "&.Mui-selected": {
//     color:"white",
//   } 
// })

export const Sidebar = () => {
  return (
    <Box bgcolor="#E7E9EB" width="20%" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Box position="fixed" sx={{ width: "20%" }} >
        <List >
          <StyledListItem disablePadding selected sx={{height: "70px"}}>

            <ListItemButton component="a" href='#simple' selected  sx={{height: "70px"}}>

              <ListItemIcon sx={{color: "white"}} >
                <InboxIcon sx={{fontSize: "2rem"}}/>
                
              </ListItemIcon >

              <ListItemText primary="Dashboard" primaryTypographyProps={{fontSize: '20px'}}  />
              
            </ListItemButton>

          </StyledListItem>

          <ListItem disablePadding sx={{ color: 'rgb(0,0,0)', height: "70px" }}>
            <ListItemButton sx={{height: "70px"}}>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'rgb(0,0,0)', fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText primary="Personnel" primaryTypographyProps={{fontSize: '20px'}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: 'rgb(0,0,0)', height: "70px" }}>
            <ListItemButton sx={{height: "70px"}}>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'rgb(0,0,0)', fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText primary="Data Attendence" primaryTypographyProps={{fontSize: '20px'}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: 'rgb(0,0,0)', height: "70px" }}>
            <ListItemButton sx={{height: "70px"}}>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'rgb(0,0,0)', fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText primary="Setting" primaryTypographyProps={{fontSize: '20px'}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: 'rgb(0,0,0)', height: "70px" }}>
            <ListItemButton sx={{height: "70px"}}>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'rgb(0,0,0)', fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText primary="Approve" primaryTypographyProps={{fontSize: '20px'}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: 'rgb(0,0,0)', height: "70px" }}>
            <ListItemButton sx={{height: "70px"}}>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'rgb(0,0,0)', fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText primary="Privilege" primaryTypographyProps={{fontSize: '20px'}} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>





    </Box>
  )
}
