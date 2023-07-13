import React from 'react'
import { Box } from '@mui/material'

const Rightbar = () => {
  return (
     //ที่หน้าจอ ขนาด xs กล่องนี้จะหายไป
    <Box bgcolor= "lightcoral"  flex={2} p={2}  sx={{display:{xs:"none",sm:"block" }}}> 
   
Rightbar
    </Box>
  )
}

export default Rightbar
