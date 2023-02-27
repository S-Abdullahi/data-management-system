import { Box, Button, Card, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
      alignItems: "center",
    }}
  >
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "360px",
        padding: "40px",
      }}
    >
      <Typography variant="body1" mb={4}>
        Forgot your password?
      </Typography>
      <Typography variant='body2' mb={4}>We will send a link to your inbox so that you can reset your password and access your account.</Typography>
      <TextField
        label="username"
        variant="outlined"
        sx={{ marginBottom: "20px" }}
      />
     
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Send link
      </Button>
      {/* <Typography variant="body2" mt={2}>
        By Signing in, you are agreeing to out{" "}
        <Link sx={{ textDecoration: "none" }}>
          Terms & Conditions and Privacy Policy
        </Link>
      </Typography> */}
            <Link
        sx={{
          marginTop: "8px",
          marginBottom: "20px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <NavLink to="/login" style={{textDecoration: 'none'}}>Return back to home</NavLink>
      </Link>

    </Card>
  </Box>
  )
}

export default ForgetPassword