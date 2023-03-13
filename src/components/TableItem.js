import { Avatar, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const tableData = [{
    id: 84829884767483,
    avater: 'MK',
    govName: 'Oyo State Government',
    govEmail: 'admin@oyo.ng',
    category: ['User Data', 'ID Card', 'Attendance'],
    dateRegistered: 'February 14, 2023',
    status: 'Active'
},{
    id: 84829884767483,
    avater: 'MK',
    govName: 'Oyo State Government',
    govEmail: 'admin@oyo.ng',
    category: ['User Data', 'ID Card', 'Attendance'],
    dateRegistered: 'February 14, 2023',
    status: 'Active'
},
{
    id: 84829884767483,
    avater: 'MK',
    govName: 'Oyo State Government',
    govEmail: 'admin@oyo.ng',
    category: ['User Data', 'ID Card', 'Attendance'],
    dateRegistered: 'February 14, 2023',
    status: 'Active'
}]

const TableItem = () => {
  return (
    <>
        {tableData.map(data => {
            return (
                <Stack direction='row'>
                    <Avatar>{data.avater}</Avatar>
                    <Box>
                        <Typography>{data.govName}</Typography>
                        <Typography>{data.govEmail}</Typography>
                    </Box>
                    <Typography>{data.id}</Typography>
                    <Box>
                        {data.category.map(cat => {
                            return <Typography>{cat}</Typography>
                        })}
                    </Box>
                    <Typography>
                        {data.dateRegistered}
                    </Typography>
                    <Typography>{data.status}</Typography>
                </Stack>
            )
        })}
    </>
  )
}

export default TableItem