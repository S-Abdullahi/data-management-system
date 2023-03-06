import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React, {useRef, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { openCategory, categoryLocation } from "../features/Dropdown/categoryslice";
import { openStatus, locateStatus } from "../features/Dropdown/statusSlice";
import { useDispatch } from "react-redux";

const TableSearch = () => {
    const catLocation = useRef()
    const statusLocation = useRef()
    const dispatch = useDispatch()

    useEffect(()=>{
        const left = catLocation.current.getBoundingClientRect().left
        const right = catLocation.current.getBoundingClientRect().right
        const top = catLocation.current.getBoundingClientRect().top + 40
        const center = (left + right) / 2
        dispatch(categoryLocation({center, top}))

        const statusLeft = statusLocation.current.getBoundingClientRect().left
        const statusRight = statusLocation.current.getBoundingClientRect().right
        const statusTop = statusLocation.current.getBoundingClientRect().top + 40
        const statusCenter = (statusTop + statusRight) / 2
        dispatch(locateStatus({statusCenter, statusTop}))
    },[])
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
        ref={catLocation}
       onClick={()=> dispatch(openCategory())}>
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
        ref={statusLocation}
        onClick ={()=>dispatch(openStatus())}
      >
        status
      </Button>
    </Stack>
  );
};

export default TableSearch;
