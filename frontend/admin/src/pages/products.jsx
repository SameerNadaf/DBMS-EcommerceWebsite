import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function Products() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {fetchData()}, [])

  const [data, setData] = useState([])
  const fetchData = async () => {
      try {
          const resp = await axios.get('http://localhost:8081/productstable')
          setData(resp.data)
          console.log(resp);
      } catch (error) {
          console.log(error);
      }

  }

  return (
    <div>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className='buttonAdd'>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ backgroundColor: '#2f2f2f', padding: 1.5 }} onClick={handleOpen}>
              Add Product
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form>
                  <Typography variant="h4" component="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Add Product
                  </Typography>
                  <div style={{ marginBottom: 15 }}>
                    <Typography variant="h6" component="h6" sx={{ marginBottom: 1 }}>
                      Title
                    </Typography>
                    <input type="text" placeholder='Product Title' name='title' style={{ width: '100%', padding: '8px' }} />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <Typography variant="h6" component="h6" sx={{ marginBottom: 1 }}>
                      Description
                    </Typography>
                    <input type="text" placeholder='Product Description' name='description' style={{ width: '100%', padding: '8px' }} />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <Typography variant="h6" component="h6" sx={{ marginBottom: 1 }}>
                      Category
                    </Typography>
                    <input type="text" placeholder='Product Category' name='category' style={{ width: '100%', padding: '8px' }} />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <Typography variant="h6" component="h6" sx={{ marginBottom: 1 }}>
                      Price
                    </Typography>
                    <input type="text" placeholder='Product Price' name='price' style={{ width: '100%', padding: '8px' }} />
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#2f2f2f', mt: 3, mb: 2,
                      '&:hover': {
                        backgroundColor: '#006400',
                      },
                    }}
                  >
                    ADD
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#2f2f2f',
                      '&:hover': {
                        backgroundColor: '#ff3333',
                      },
                    }}
                    onClick={handleClose}
                  >
                    CLOSE
                  </Button>
                </form>
              </Box>
            </Modal>
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
                {data.map((d,i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell align="center" >{d.p_id}</StyledTableCell>
                    <StyledTableCell align="center">{d.title}</StyledTableCell>
                    <StyledTableCell align="center">{d.description}</StyledTableCell>
                    <StyledTableCell align="center">{d.category}</StyledTableCell>
                    <StyledTableCell align="center">₹{d.price}</StyledTableCell>
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
