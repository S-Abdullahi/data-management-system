import { EnergySavingsLeaf, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Title from "../../components/Title";

const ResetPassword = () => {
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
            Reset your password?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <FormControl
            sx={{ width: "100%", marginBottom: "16px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              // type={showPassword ? 'text' : 'password'}
              type="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography variant="body1">Password must contain:</Typography>
          <Box sx={{ display: "flex", padding: 0 }}>
            <IconButton>
              <CheckCircleIcon sx={{ fontSize: "12px" }} color="success" />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                Lower Case
              </Typography>
            </IconButton>
            <IconButton>
              <CheckCircleIcon sx={{ fontSize: "12px" }} />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                At least 1 number
              </Typography>
            </IconButton>
            <IconButton>
              <CheckCircleIcon sx={{ fontSize: "12px" }} />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                Special Character
              </Typography>
            </IconButton>
          </Box>
          <Box marginTop="-10px">
            <IconButton>
              <CheckCircleIcon sx={{ fontSize: "12px" }} />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                8 or more characters
              </Typography>
            </IconButton>
            <IconButton>
              <CheckCircleIcon sx={{ fontSize: "12px" }} />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                Uppercase
              </Typography>
            </IconButton>
          </Box>
          <Button
            variant="contained"
            sx={{ textTransform: "none", marginTop: 2 }}
          >
            Save New Password
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

export default ResetPassword;
