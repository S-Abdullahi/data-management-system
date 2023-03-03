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

const CategoryCard = () => {
  return (
    <Box width='255px'>
      <Card>
        <CardContent>
          <TextField placeholder="search" size="small"></TextField>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="User Data"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="ID Card"
            />
            <FormControlLabel control={<Checkbox />} label="Attendance" />
          </FormGroup>
          <Stack direction='row'  spacing={2}>
            <Button variant="contained" sx={{ textTransform: "none" }}>
              Select
            </Button>
            <Button
              variant="contained" disableElevation
              sx={{
                textTransform: "none",
                backgroundColor: "#F0F5FF",
                color: "#0050C8",
              }}
            >
              Cancel
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CategoryCard;