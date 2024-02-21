import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


function WishlistPopover({ open, anchorEl, handleClose }) {

    useEffect(() => {
        fetchWish();
    }, []);

    const [wish, setWish] = useState([]);

    const fetchWish = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/wishlist');
            setWish(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveItem = async (id) => {
        try {
            await axios.delete('http://localhost:8081/wishlistdelete/' + id)
            console.log('Product deleted successful');
            fetchWish();
        }
        catch (err) {
            console.log('Error deleting product !', err);
        }

    };

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Box sx={{ p: 2, width: 300, textAlign: 'center' }}>
                <Typography variant="h6" component="div"
                    sx={{
                        background: 'linear-gradient(to right, #c72092, #6c14d0)',
                        WebkitBackgroundClip: 'text', color: 'transparent',
                        fontWeight: 'bold', marginBottom: 2
                    }}>
                    YOUR WISHLIST PRODUCTS
                </Typography>
                <Grid container spacing={2}>
                    {wish?.map((data, i) => (
                        <Grid item xs={12} key={i}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                <CardMedia
                                    sx={{ width: 60, height: 60, marginRight: 2, marginTop: 2, marginLeft: 2, display: 'flex', alignItems: 'center' }}
                                    image={`http://localhost:8081/images/${data.image}`}
                                    title={data.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.price}
                                    </Typography>
                                </CardContent>
                                <IconButton
                                        edge="end"
                                        aria-label="Remove"
                                        sx={{
                                            marginLeft: 'auto', marginRight: 2,
                                            '&:hover': {
                                                '& .MuiSvgIcon-root': {
                                                    fill: 'blue',
                                                },
                                            },
                                        }}
                                        onClick={() => handleRemoveItem(data.p_id)}
                                    >
                                        <RemoveCircleIcon />
                                    </IconButton>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Popover>
    );
}


function CartPopover({ open, anchorEl, handleClose }) {
    useEffect(() => {
        fetchCart();
    }, []);

    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchCart = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/cart');
            setCart(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete('http://localhost:8081/cartdelete/' + id)
            console.log('Product deleted successful');
            fetchCart();
        }
        catch (err) {
            console.log('Error deleting product !', err);
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., send data to server
        // You can access the form data from the 'formData' state
      };

    return (

        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Box sx={{ p: 2, width: 300, textAlign: 'center' }}>
                <Typography variant="h6" component="div"
                    sx={{
                        background: 'linear-gradient(to right, #c72092, #6c14d0)',
                        WebkitBackgroundClip: 'text', color: 'transparent',
                        fontWeight: 'bold', marginBottom: 2
                    }}>
                    YOUR CART PRODUCTS
                </Typography>
                <Grid container spacing={2}>
                    {cart?.map((data, i) => (
                        <Grid item xs={12} key={i}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                <CardMedia
                                    sx={{ width: 60, height: 60, marginRight: 2, marginTop: 2, marginLeft: 2, display: 'flex', alignItems: 'center' }}
                                    image={`http://localhost:8081/images/${data.image}`}
                                    title={data.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.price}
                                    </Typography>
                                </CardContent>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    sx={{
                                        marginLeft: 'auto', marginRight: 2,
                                        '&:hover': {
                                            '& .MuiSvgIcon-root': {
                                                fill: 'red',
                                            },
                                        },
                                    }}
                                    onClick={() => handleDeleteItem(data.p_id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Button
                    variant="contained"
                    onClick={handleOpenModal}
                    sx={{
                        marginTop: 2,
                        mx: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        background: 'linear-gradient(to right, #c72092, #6c14d0)',
                        color: '#ffff',
                        width: '100%'
                    }}
                >
                    PROCEED TO BUY
                </Button>

                <Modal open={isModalOpen} onClose={handleCloseModal}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                     padding: '20px', maxWidth: '400px', backgroundColor: 'white', border: '2px solid #000', textAlign: 'center' }}>
                        <Typography variant="h6" component="div"
                            sx={{
                                background: 'linear-gradient(to right, #c72092, #6c14d0)',
                                WebkitBackgroundClip: 'text', color: 'transparent',
                                fontWeight: 'bold', marginBottom: 2
                            }}>
                            CART PRODUCTS
                        </Typography>

                        <Grid container spacing={2}>
                            {cart?.map((product) => (
                                <Grid item key={product.id} xs={12} sm={3}>
                                    {product.image && <img src={`http://localhost:8081/images/${product.image}`}
                                        alt="Product Image" style={{ width: '50px', height: '50px' }} />}
                                </Grid>
                            ))}
                        </Grid>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button onClick={handleCloseModal} variant="contained"
                                        sx={{
                                            mt: 2, width: '100%',
                                            backgroundColor: theme => theme.palette.error.main,
                                            '&:hover': { backgroundColor: '#ff0000' }
                                        }}>
                                        Close
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button type="submit" variant="contained"
                                        sx={{
                                            mt: 2, width: '100%',
                                            backgroundColor: theme => theme.palette.success.main,
                                            '&:hover': { backgroundColor: '#00cc00' }
                                        }}>
                                        Place Order
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Modal>
            </Box>
        </Popover>
    );
}


function Header() {

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [wishlistPopoverOpen, setWishlistPopoverOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cartPopoverOpen, setCartPopoverOpen] = React.useState(false);
    const [cartAnchorEl, setCartAnchorEl] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenWishlistPopover = (event) => {
        setAnchorEl(event.currentTarget);
        setWishlistPopoverOpen(true);
    };

    const handleCloseWishlistPopover = () => {
        setAnchorEl(null);
        setWishlistPopoverOpen(false);
    };

    const handleOpenCartPopover = (event) => {
        setCartAnchorEl(event.currentTarget);
        setCartPopoverOpen(true);
    };

    const handleCloseCartPopover = () => {
        setCartAnchorEl(null);
        setCartPopoverOpen(false);
    };


    return (
        <>
            <AppBar position="fixed" sx={{ left: 0, right: 0, background: 'white', color: 'black' }}>
                <Toolbar disableGutters sx={{ maxWidth: 'xl' }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            marginLeft: 8,
                            display: { xs: 'none', md: 'flex' },
                            fontfamily: 'Protest Riot, sans-serif',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                    >
                        <span className='logo'>Footwea<span>r</span></span>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={() => { navigate("/") }}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { navigate("/products") }}>
                                <Typography textAlign="center">Products</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { navigate("/aboutUs") }}>
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { navigate("/contactUs") }}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontfamily: 'Protest Riot, sans-serif',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                    >
                        <span className='logo'>Footwea<span>r</span></span>
                    </Typography>
                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={() => { navigate("/") }}
                            sx={{
                                my: 2, color: 'black', display: 'block', '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    '& .MuiTypography-root': {
                                        color: '#c72092 ',
                                    },
                                },
                                marginRight: '20px'
                            }} >
                            <Typography variant="body1" >
                                Home
                            </Typography>
                        </Button>
                        <Button onClick={() => { navigate("/products") }}
                            sx={{
                                my: 2, color: 'black', display: 'block',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    '& .MuiTypography-root': {
                                        color: '#c72092 ',
                                    },
                                },
                                marginRight: '20px'
                            }}>
                            <Typography variant="body1" >
                                Products
                            </Typography>
                        </Button>
                        <Button onClick={() => { navigate("/aboutUs") }}
                            sx={{
                                my: 2, color: 'black', display: 'block',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    '& .MuiTypography-root': {
                                        color: '#c72092 ',
                                    },
                                },
                                marginRight: '20px'
                            }}>
                            <Typography variant="body1" >
                                About Us
                            </Typography>
                        </Button>
                        <Button onClick={() => { navigate("/contactUs") }}
                            sx={{
                                my: 2, color: 'black', display: 'block',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    '& .MuiTypography-root': {
                                        color: '#c72092 ',
                                    },
                                },
                            }}>
                            <Typography variant="body1" >
                                Contact Us
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open Wishlist">
                            <IconButton sx={{
                                p: 20 + 'px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    '& svg': {
                                        color: '#c72092',
                                    },
                                },
                            }} onClick={handleOpenWishlistPopover}>
                                <FavoriteIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>

                        {/* Wishlist Popover */}
                        <WishlistPopover open={wishlistPopoverOpen} anchorEl={anchorEl} handleClose={handleCloseWishlistPopover} />

                        <Tooltip title="Open Cart">
                            <IconButton sx={{
                                p: 20 + 'px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    '& svg': {
                                        color: '#c72092',
                                    },
                                },
                            }} onClick={handleOpenCartPopover}>
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>

                        {/* Cart Popover */}
                        <CartPopover open={cartPopoverOpen} anchorEl={cartAnchorEl} handleClose={handleCloseCartPopover} />

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 10 + 'px' }}>
                                <Avatar alt="S" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                
                            <MenuItem onClick={() => { navigate("/account") }}>
                                <Typography textAlign="center">Account</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { navigate("/signin") }}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { navigate("/signup") }}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
