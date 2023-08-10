import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { styled } from '@mui/system';
import { Avatar, Stack, Typography, createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { EmojiEmotions, PersonAdd, VideoCameraBack, Image, DateRange } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { purple, red } from '@mui/material/colors';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const accent = purple.A200

const Add = ({ darkTheme }) => {

  const [open ,setOpen] =useState(false)
  return (
    <Box>
    <Tooltip 
  onClick={() => setOpen(true)}
  title="Delete"
  sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
>

     <Fab size="small" color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
  <Typography variant="h6" color="gray" textAlign="center" >Create post</Typography>
<UserBox>
<Avatar  
src="picture/profile-nav.png"
sx={{ width:30 , height:30 }}
/>
<Typography  fontWeight={500}  variant='span' > John Snow</Typography>

</UserBox>
<TextField
           sx={{width:"100%"}}
          id="standard-multiline-static"
          // label="Multiline"
          multiline
          rows={3}
          placeholder="what'your mind"
          variant="standard"
        />
 <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions  color={createTheme.emojiIcon} />
            <Image   color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange color={darkTheme.palette.primary.main} />
            </Button>
        

</ButtonGroup>





</Box>

      </StyledModal>


    </Box>
  )
}

export default Add
