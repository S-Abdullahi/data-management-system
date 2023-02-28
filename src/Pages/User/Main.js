import {
  Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import UserCards from "../../components/UserCards";
import TableSearch from "../../components/TableSearch";
import InstanceTable from "../../components/InstanceTable";
import EmptyTable from "../../components/EmptyTable";
import CreateNewInstance from "../../modals/CreateNewInstance";

const Main = () => {
  return (
    <Stack sx={{ margin: 2, color: "#9DA0A7", marginRight: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="body2">instance</Typography>
        <Button variant="contained">Add now</Button>
      </Box>
      <UserCards />
      <TableSearch />
      {/* <InstanceTable /> */}
      <EmptyTable/>
      <CreateNewInstance/>
    </Stack>
  );
};

export default Main;
