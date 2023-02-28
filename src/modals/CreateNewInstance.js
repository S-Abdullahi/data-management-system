import {
  Drawer,
  Box,
  Typography,
  Paper,
  IconButton,
  Button,
  TextField,
  Stack,
  Link,
  Avatar,
} from "@mui/material";
import React from "react";
import Close from "../assets/close.svg";
import GroupFolder from '../assets/groupfolders.svg';
import CloseIcon from '@mui/icons-material/Close';

const CreateNewInstance = () => {
  return (
    <Drawer anchor="right" open="true" width="600px">
      <Box width="600px">
        <Paper variant="outlined" sx={{display: 'flex', justifyContent:'space-between',alignItems: 'center', padding: '10px' }}>
          <Typography>Add new instance</Typography>
          <IconButton>
            <CloseIcon/>
          </IconButton>
        </Paper>
        <Stack direction='column' spacing={2} sx={{padding: 2}}>
            <TextField placeholder="Instance name" size='small'></TextField>
            <TextField type='url' label='url' placeholder="https://datamanagement.com" size='small'></TextField>
            <TextField placeholder="Admin name" size='small'></TextField>
            <TextField type='email' placeholder="Admin email" size='small'></TextField>
        </Stack>
        <Typography variant='body2' sx={{margin: '10px', color: '#6B6C7E'}}>Instance Logo</Typography>
        <Paper variant='outlined' sx={{display: 'flex', flexDirection: 'column' ,justifyContent:'center',alignItems: 'center',height:'145px', margin: '10px' }}>
            <Avatar src={GroupFolder} alt='group folder'></Avatar>
            <Typography variant='body' sx={{fontSize: '16px'}}>Drop your files here or <Link sx={{textDecoration: 'none'}}>click here</Link> to upload</Typography>
            <Typography variant='body2'  sx={{fontSize: '14px', color:' #6B6C7E'}}>Format (jpg, png, xls, pdf, csv, ppt). Maximum of 5MB</Typography>
        </Paper>
      </Box>
    </Drawer>
  );
};

export default CreateNewInstance;
