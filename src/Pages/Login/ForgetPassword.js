import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title";

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
      <Title />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
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
            forget your password?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Typography variant="body2" mb={4}>
            We will send a link to your inbox so that you can reset your
            password and access your account.
          </Typography>
          <TextField
            label="username"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />

          <Button variant="contained" sx={{ textTransform: "none" }}>
            Send link
          </Button>
        </Box>
        <Box
          sx={{
            padding: "15px",
            paddingLeft: "30px",
            borderTop: "1px solid #E0E0E0",
          }}
        >
          <Link
            sx={{
              marginTop: "8px",
              marginBottom: "20px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "#0050C8",
              }}
            >
              Return back to home
            </NavLink>
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
