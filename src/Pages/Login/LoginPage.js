import {
  Button,
  Card,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
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
        <Typography variant="body2" mb={4}>
          Sign in with your email
        </Typography>
        <TextField
          label="email"
          variant="outlined"
          sx={{ marginBottom: "20px" }}
        />
        <TextField label="password" type="password" variant="outlined" />
        <Link
          sx={{
            marginTop: "8px",
            marginBottom: "20px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <NavLink to="/forget_password" style={{textDecoration: 'none'}}>Forget Password?</NavLink>
        </Link>
        <Button variant="contained" sx={{ textTransform: "none" }}>
          Sign in
        </Button>
        <Typography variant="body2" mt={2}>
          By Signing in, you are agreeing to out{" "}
          <Link sx={{ textDecoration: "none" }}>
            Terms & Conditions and Privacy Policy
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default LoginPage;
