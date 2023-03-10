import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as MainTable,
  TableBody,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'name', width: 200 },
  { field: 'id', headerName: 'instanceId', width: 200 },
  { field: 'category', headerName: 'category', width: 300 },
  {
    field: 'dateRegistered',
    headerName: 'Date Registered',
    type: 'number',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'status',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, name: 'Snow', status: 'Jon', category: 35, dateRegistered: 'February 14, 1759' },
  { id: 2, name: 'Lannister', status: 'Cersei', category: 42, dateRegistered: 'February 14, 1759' },
  { id: 3, name: 'Lannister', status: 'Jaime', category: 45, dateRegistered: 'February 14, 1759' },
  { id: 4, name: 'Stark', status: 'Arya', category: 16, dateRegistered: 'February 14, 1759' },
  { id: 5, name: 'Targaryen', status: 'Daenerys', category: null, dateRegistered: 'February 14, 1759' },
  { id: 6, name: 'Melisandre', status: null, category: 150, dateRegistered: 'February 14, 1759' },
  { id: 7, name: 'Clifford', status: 'Ferrara', category: 44, dateRegistered: 'February 14, 1759' },
  { id: 8, name: 'Frances', status: 'Rossini', category: 36, dateRegistered: 'February 14, 1759' },
  { id: 9, name: 'Roxie', status: 'Harvey', category: 65 , dateRegistered: 'February 14, 1759'},
];


const Table = () => {
  return (
    <div style={{ height: 400, width: '100%', textAlign: 'center' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    // <TableContainer component={Paper} sx={{marginTop: '20px' }}>
    //   <MainTable sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell align="right">Instance ID</TableCell>
    //         <TableCell align="right">Category</TableCell>
    //         <TableCell align="right">Date Registered</TableCell>
    //         <TableCell align="right">Status</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //     {rows.map((row) => (
    //       <TableRow
    //         key={row.name}
    //         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //       >
    //         <TableCell component="th" scope="row">
    //           {row.name}
    //         </TableCell>
    //         <TableCell align="right">{row.calories}</TableCell>
    //         <TableCell align="right">{row.fat}</TableCell>
    //         <TableCell align="right">{row.carbs}</TableCell>
    //         <TableCell align="right">{row.protein}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    //   </MainTable>
    // </TableContainer>
  );
};

export default Table;
