import { TextField, Stack, Typography, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TableSearch = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} marginTop={2}>
      <TextField
        placeholder="search"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
        }}
      ></TextField>
      <Typography variant="body2">filter by:</Typography>
    </Stack>
  );
};

export default TableSearch;
