import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const TableSearch = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} marginTop={2}>
      <TextField
        placeholder="search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Typography variant="body2">filter by:</Typography>
      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={{
          color: "#9DA0A7",
          backgroundColor: "#F1F2F6",
          textTransform: "none",
        }}
      >
        category
      </Button>
      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={{ color: "white", backgroundColor: "black", textTransform: "none" }}
      >
        Date:
      </Button>
      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={{
          color: "#9DA0A7",
          backgroundColor: "#F1F2F6",
          textTransform: "none",
        }}
      >
        status
      </Button>
    </Stack>
  );
};

export default TableSearch;
