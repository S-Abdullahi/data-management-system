import {
  Stack,
  Typography,
  Box,
} from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import UserCards from "../../components/UserCards";
import TableSearch from "../../components/TableSearch";
import InstanceTable from "../../components/InstanceTable";
import EmptyTable from "../../components/EmptyTable";
import CreateNewInstance from "../../Modals/CreateNewInstance";
import CategoryCard from "../../components/subComponents/CategoryCard";
import InsightModal from "../../Modals/InsightModal";
import EditInstance from "../../Modals/EditInstance";
import { Edit } from "@mui/icons-material";
import { openNewInstanceModal as newInstanceModal } from "../../features/Modal/modalslice";

import {useSelector, useDispatch} from 'react-redux'

const Main = () => {
    const {openNewInstanceModal} = useSelector((store)=> store.modal)
    const {openCategoryDropdown} = useSelector((store)=> store.category)
    const dispatch = useDispatch()
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
        <Button variant="contained" onClick={()=>dispatch(newInstanceModal())}>Add now</Button>
      </Box>
      <UserCards />
      <TableSearch />
      {/* <InstanceTable /> */}
      <EmptyTable/>
      {openNewInstanceModal && <CreateNewInstance/>}
      {/* <CreateNewInstance/> */}
      {/* <InsightModal/> */}
      {/* <EditInstance/> */}
      {openCategoryDropdown && <CategoryCard/>}
      {/* <CategoryCard/> */}
    </Stack>
  );
};

export default Main;
