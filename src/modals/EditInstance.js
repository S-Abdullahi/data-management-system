import React from "react";
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
  Checkbox,
} from "@mui/material";
import civilServant from "../assets/civilServant.svg";
import civilServant2 from "../assets/civilServant2.svg";
import civilServant3 from "../assets/civilServant3.svg";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { pink } from "@mui/material/colors";

const EditInstance = () => {
  return (
    <Drawer anchor="right" open="true" width="600px">
      <Box>
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography variant="body" sx={{ fontSize: "18px", fontWeight: 500 }}>
            Edit instance
          </Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Paper>
        <Box width="600px" sx={{ padding: "10px" }}>
          <Stack
            direction="column"
            spacing={3}
            sx={{ marginTop: 2, marginBottom: 1 }}
          >
            <TextField
              placeholder="Instance name"
              label="Instance name"
              size="small"
            ></TextField>
            <TextField
              type="url"
              label="url"
              placeholder="https://datamanagement.com"
              size="small"
            ></TextField>
            <TextField
              placeholder="Admin name"
              label="Admin name"
              size="small"
            ></TextField>
            <TextField
              type="email"
              placeholder="Admin email"
              size="small"
              label="Admin Email"
            ></TextField>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#6B6C7E", marginBottom: 1, marginTop: 3.5 }}
          >
            Instance Logo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderBottom: "solid 1px #E0E0E0",
              paddingBottom: 2,
            }}
          >
            <InsertDriveFileOutlinedIcon fontSize="large" color="disabled" />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, fontSize: "16px", color: "#393A4A" }}
              >
                oyoLogo.png
              </Typography>
              <Typography
                variant="body 2"
                sx={{ fontSize: "14px", color: "#6B6C7E" }}
              >
                16 Feb, 2019 at 10:05 pm | 1.2MB
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 15, display: "flex", gap: 2 }}>
              <VisibilityIcon color='disabled'/>
              <DeleteIcon sx={{ color: pink[500] }} />
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#6B6C7E", marginBottom: 1, marginTop: 3 }}
          >
            Select Modules
          </Typography>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Paper
              variant="outlined"
              padding={2}
              sx={{ padding: 1, flex: "1 1 0" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Avatar src={civilServant}></Avatar>
                <Checkbox />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  marginTop: 2,
                  marginBottom: 1,
                  fontWeight: 600,
                }}
              >
                User Data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#6B6C7E", width: "135px", fontSize: "14px" }}
              >
                Two lines description here.
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ padding: 1, flex: "1 1 0" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Avatar src={civilServant2}></Avatar>
                <Checkbox />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  marginTop: 2,
                  marginBottom: 1,
                  fontWeight: 600,
                }}
              >
                User Data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#6B6C7E", width: "135px", fontSize: "14px" }}
              >
                Two lines description here.
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ padding: 1, flex: "1 1 0" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Avatar src={civilServant3}></Avatar>
                <Checkbox />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  marginTop: 2,
                  marginBottom: 1,
                  fontWeight: 600,
                }}
              >
                User Data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#6B6C7E", width: "135px", fontSize: "14px" }}
              >
                Two lines description here.
              </Typography>
            </Paper>
          </Stack>
        </Box>
        <Stack
            direction="row"
            marginTop={2}
            paddingRight={3}
            spacing={4}
            justifyContent="flex-end"
            alignItems="center"
            backgroundColor='#F5F7FA'
            height='90px'
          >
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none"}}
            >
              Update
            </Button>
            <Button variant="text" sx={{ textTransform: "none" }}>
              Cancel
            </Button>
          </Stack>
      </Box>
    </Drawer>
  );
};

export default EditInstance;
