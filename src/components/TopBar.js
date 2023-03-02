import { Search } from "@mui/icons-material";
import { Avatar, Paper, TextField, Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const TopBar = () => {
  return (
    <Paper
    //   bgcolor="red"
    //   display="flex"
    //   flexDirection="row"
    //   height="62px"
    //   justifyContent="space-between"
    //   p={2}
    //   alignItems="center"
    //   width="100vw"
    >
      <Stack direction="row" justifyContent="space-between" p={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "704px",
          }}
        >
          <Typography color="primary" marginLeft={4} sx={{ fontWeight: 600 }}>
            MDM Admin
          </Typography>
          <TextField
            label={<Search />}
            placeholder="search"
            height="42px"
            size="small"
            bgcolor="#F8F7FA"
            sx={{ width: 456 }}
          ></TextField>
        </Box>
        <Avatar sx={{ marginRight: "50px" }}>SA</Avatar>
      </Stack>
    </Paper>
  );
};

export default TopBar;
