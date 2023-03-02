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
import React from "react";
import civilServant from "../assets/civilServant.svg";
import civilServant2 from "../assets/civilServant2.svg";
import civilServant3 from "../assets/civilServant3.svg";
import GroupFolder from "../assets/groupfolders.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeNewInstanceModal } from "../features/Modal/modalslice";

const CreateNewInstance = () => {
    const dispatch = useDispatch()
  return (
    <Drawer
      anchor="right"
      open="true"
      onClose={()=> dispatch(closeNewInstanceModal())}
      width="600px"
      sx={{ transition: "all 0.5s linear" }}
    >
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
            Add new instance
          </Typography>
          <IconButton>
            <CloseIcon onClick={()=>dispatch(closeNewInstanceModal())}/>
          </IconButton>
        </Paper>
        <Box width="600px" sx={{ padding: "10px" }}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ marginTop: 2, marginBottom: 1 }}
          >
            <TextField placeholder="Instance name" size="small"></TextField>
            <TextField
              type="url"
              label="url"
              placeholder="https://datamanagement.com"
              size="small"
            ></TextField>
            <TextField placeholder="Admin name" size="small"></TextField>
            <TextField
              type="email"
              placeholder="Admin email"
              size="small"
            ></TextField>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#6B6C7E", marginBottom: 1, marginTop: 1 }}
          >
            Instance Logo
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "145px",
            }}
          >
            <Avatar src={GroupFolder} alt="group folder"></Avatar>
            <Typography variant="body" sx={{ fontSize: "16px" }}>
              Drop your files here or{" "}
              <Link sx={{ textDecoration: "none" }}>click here</Link> to upload
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: " #6B6C7E" }}
            >
              Format (jpg, png, xls, pdf, csv, ppt). Maximum of 5MB
            </Typography>
          </Paper>
          <Typography
            variant="body2"
            sx={{ color: "#6B6C7E", marginBottom: 1, marginTop: 1 }}
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
          <Stack
            direction="row"
            marginTop={2}
            spacing={4}
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Create
            </Button>
            <Button variant="text" sx={{ textTransform: "none" }} onClick={()=>dispatch(closeNewInstanceModal())}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CreateNewInstance;
