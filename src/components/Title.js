import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Logo from "../assets/logo.svg"

const Title = () => {
  return (
    <Box
        sx={{
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <img src={Logo} />
        <Typography variant="body2" color="#6B6C7E">
          A one-stop gateway to managing your data.
        </Typography>
      </Box>
  )
}

export default Title