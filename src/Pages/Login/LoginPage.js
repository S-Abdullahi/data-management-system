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
import Logo from "../../assets/logo.svg";
import Title from "../../components/Title";
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
      <Title/>
      <Card
        elevation={3}
        sx={{
          width: "360px",
        }}
      >
        <Box
          sx={{
            padding: "15px",
            paddingLeft: "30px",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "14px", fontWeight: 400, color: "#393A4A" }}
          >
            Sign in with your email
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "40px" }}>
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
            <NavLink to="/forget_password" style={{ textDecoration: "none" }}>
              Forget Password?
            </NavLink>
          </Link>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Sign in
          </Button>
          <Typography variant="body2" mt={2} fontSize="12px">
            By Signing in, you are agreeing to out{" "}
            <Link sx={{ textDecoration: "none" }}>
              Terms & Conditions and Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;
