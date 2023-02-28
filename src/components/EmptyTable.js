import { Avatar, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import EmptyTableIcon from '../assets/emptyTable.svg'

const EmptyTable = () => {
  return (
    <Paper variant='outlined' sx={{textAlign: 'center', height: 350, marginTop: '20px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1.5}}>
        <Avatar alt='empty box' src={EmptyTableIcon} sx={{alignSelf: 'center', height:'96px', width: '96px'}} size= 'large'></Avatar>
        <Typography variant='h6' fontSize='18px'>No Instance</Typography>
        <Typography variant='body2' color='#605E5C' fontSize='14px' width='256px' lineHeight='20px'>You current do not have registered instance</Typography>
        <Button variant='text' sx={{textTransform: 'none'}}>Add new</Button>
    </Paper>
  )
}

export default EmptyTable