import { Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const SharedUserLayout = () => {
  return (
    <Stack direction="column" sx={{position: 'relative'}}>
      <TopBar />
      <Grid container sx={{zIndex:'-1'}} spacing={4} sx={{}}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SharedUserLayout;
