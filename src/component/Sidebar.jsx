import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText , ListItem   ,ArticleIcon } from '@mui/material'
import { AccountBox, Article, Home, Person, Settings, Storefront } from '@mui/icons-material'

import GroupIcon from '@mui/icons-material/Group';


const Sidebar = () => {
  return (
    <Box   bgcolor="skyblue" flex={1} p={2}  sx={{display:{xs:"none",sm:"block" }}}>
      <List>
<ListItem  disablePadding  >
<ListItemButton component="a" href="#home" >
<ListItemIcon>
<Home/>
</ListItemIcon>
<ListItemText primary="Homepage"/>
</ListItemButton>
</ListItem>


<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<Article/>
</ListItemIcon>
<ListItemText primary="Pages"/>
</ListItemButton> 
</ListItem>


<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<GroupIcon /> 
</ListItemIcon>
<ListItemText primary="Groups"/>
</ListItemButton> 
</ListItem>



<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<Storefront/>
</ListItemIcon>
<ListItemText primary="Marketplace"/>
</ListItemButton> 
</ListItem>


<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<Person/>
</ListItemIcon>
<ListItemText primary="Friends"/>
</ListItemButton> 
</ListItem>


<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<Settings/>
</ListItemIcon>
<ListItemText primary="Settings"/>
</ListItemButton> 
</ListItem>


<ListItem  disablePadding  >
<ListItemButton component="a" href="#simple-list" >
<ListItemIcon>
<AccountBox/>
</ListItemIcon>
<ListItemText primary="Profile"/>
</ListItemButton> 
</ListItem>







      </List>
    </Box>
  )
}

export default Sidebar
