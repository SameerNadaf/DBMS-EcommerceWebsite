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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`& .add-icon:hover`]: {
    color: '#00cc00',
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

function createData(id, name, dec, price, cat) {
  return { id, name, dec, price, cat };
}

const rows = [
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'men'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'men'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'kids'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'men'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'women'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'women'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'men'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'kids'),
  createData(1, 'shoes1', 'Nice product to wear and good looking', 999, 'men'),
];


function Products() {
  return (
    <div>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className='buttonAdd'>
            <Button variant="contained" startIcon={<AddIcon />} sx={{backgroundColor: '#2f2f2f', padding: 1.5}}>
              Add Product
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Product Id</StyledTableCell>
                  <StyledTableCell align="center">Product Name</StyledTableCell>
                  <StyledTableCell align="center">Product Description</StyledTableCell>
                  <StyledTableCell align="center">Category</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Edit</StyledTableCell>
                  <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="center" >
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.dec}</StyledTableCell>
                    <StyledTableCell align="center">{row.cat}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    <StyledTableCell align="center"><EditIcon className="add-icon" /></StyledTableCell>
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

export default Products;
