import { Button, IconButton, Stack, Typography, Box } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SideBar = () => {
  return (
    <Stack
      width="232px"
      height="90vh"
      bgcolor="#F8F7FA"
      direction="column"
      justifyContent="space-between"
      sx={{ position: "absolute", zIndex: "-1" }}
    >
      <Button
        sx={{ textTransform: "none", marginTop: "20px" }}
        startIcon={<PersonOutlineOutlinedIcon />}
      >
        Instance
      </Button>

      <Stack direction="column" alignItems="center" spacing={2}>
        <Typography color="#9DA0A7" fontSize="12px">
          YOUR ACCOUNT
        </Typography>
        <Button size="small" startIcon={<LogoutOutlinedIcon />}>
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default SideBar;
