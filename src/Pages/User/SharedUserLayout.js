import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'

const SharedUserLayout = () => {
  return (
    <Stack direction='column' sx={{}}>
        <TopBar/>
        <Stack direction='row' sx={{zIndex: '-1'}}>
            <SideBar/>
            <Outlet/>
        </Stack>
    </Stack>
  )
}

export default SharedUserLayout