import { AppBar ,Box,Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import UnstyledInputBasic from "./inputSarch-fornav"
import Badge from '@mui/base/Badge';
import MailIcon from '@mui/icons-material/Mail';
// import AccessibleBadges from "./mail-fornav"


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"

})

//  const Search =styled("div")(({theme}) =>({
//   backgroundColor: "white",
//  padding:"0 10px",
//  borderRadius: "5px",
//  width:"40%"
//  }))

 const Icons =styled(Box)(({theme}) =>({
  // backgroundColor: "white",
  //  borderRadius: "5px",
  //  padding:"0 2px",
 }))

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography  variant='h6' sx={{display:{xs:"none",sm:"block" }}} > 
MILKY MIRA
      </Typography>
  
     <UnstyledInputBasic/>
  
       <Icons>
       <Badge badgeContent={4}  >
  <MailIcon/>
</Badge>
       </Icons>
    </StyledToolbar>
     
    </AppBar>
  )
}

export default Navbar
