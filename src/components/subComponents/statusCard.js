import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeStatus } from "../../features/Dropdown/statusSlice";

const StatusCard = () => {
  const dispatch = useDispatch();
  const {statusCenter, statusTop} = useSelector((store)=>store.status.statusLocation)
  return (
    <Box width="255px" sx={{ position: "absolute", top: statusTop, left: statusCenter}}>
      <Card>
        <CardContent>
        <FormControlLabel control={<Checkbox />} label="Check All" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Active" />
            <FormControlLabel control={<Checkbox />} label="Suspended" />
            <FormControlLabel control={<Checkbox />} label="Deactivated" />
          </FormGroup>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{ textTransform: "none" }}>
              Select
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                backgroundColor: "#F0F5FF",
                color: "#0050C8",
              }}
              onClick={()=>dispatch(closeStatus())}
            >
              Cancel
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatusCard;
