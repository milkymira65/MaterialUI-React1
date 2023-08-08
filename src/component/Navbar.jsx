import { AppBar ,Box,Toolbar, Typography  , Badge} from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import UnstyledInputBasic from "./inputSarch-fornav"

import AccessibleBadges from "./cild-component/mail-fornav"
import AccessibleBadges2 from "./cild-component/notificationbell"
import AccessibleBadges3 from "./cild-component/nav-like-facbook"

// const StyledToolbar = styled(Toolbar)({
//   display:"flex",
//   justifyContent:"space-between"

// })

// //  const Search =styled("div")(({theme}) =>({
// //   backgroundColor: "white",
// //  padding:"0 10px",
// //  borderRadius: "5px",
// //  width:"40%"
// //  }))

//  const Icons =styled(Box)(({theme}) =>({
//   // backgroundColor: "white",
//   //  borderRadius: "5px",
//   //  padding:"0 2px",
//  }))

const Navbar = () => {
  return (
//     <AppBar position='sticky'>
//       <StyledToolbar>
//         <Typography  variant='h6' sx={{display:{xs:"none",sm:"block" }}} > 
// MILKY MIRA
//       </Typography>
  
//      <UnstyledInputBasic/>
  
//       {/* <Icons>
    
//     <Badge  color="primary"   >
//    <AccessibleBadges/>
// <AccessibleBadges2/> 
//  </Badge>
//        </Icons> */}


//     </StyledToolbar>
     
//     </AppBar>
<AccessibleBadges3/>

  )
}

export default Navbar
