import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/sidebar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },

  [`& .delete-icon:hover`]: {
    color: '#ff0000',
  },
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, fname, lname, gmail, pass) {
  return { id, fname, lname, gmail, pass };
}

const rows = [
  createData(1, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(2, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(3, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(4, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(5, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(6, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(7, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(8, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(9, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(10, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
  createData(11, 'sameer', 'Nadaf', 'sam@gmail.com', 'sameer@123'),
];


function Users() {
  return (
    <div>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">User Id</StyledTableCell>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Last Name</StyledTableCell>
                  <StyledTableCell align="center">Gmail</StyledTableCell>
                  <StyledTableCell align="center">Password</StyledTableCell>
                  <StyledTableCell align="center">Remove</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="center" >{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.fname}</StyledTableCell>
                    <StyledTableCell align="center">{row.lname}</StyledTableCell>
                    <StyledTableCell align="center">{row.gmail}</StyledTableCell>
                    <StyledTableCell align="center">{row.pass}</StyledTableCell>
                    <StyledTableCell align="center"><DeleteIcon className="delete-icon" /></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  )
}

export default Users;
