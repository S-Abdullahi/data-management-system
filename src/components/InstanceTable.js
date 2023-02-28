import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as MainTable,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const Table = () => {
  return (
    <TableContainer component={Paper} sx={{marginTop: '20px' }}>
      <MainTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Instance ID</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Date Registered</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
      </MainTable>
    </TableContainer>
  );
};

export default Table;
