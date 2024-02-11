import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function WishlistPopover({ open, anchorEl, handleClose }) {
    // Replace the following with your logic to fetch and display wishlisted products
    const wishlistedProducts = [
        { id: 1, title: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, title: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
        { id: 3, title: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" },
    ];

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
            <Box sx={{ p: 2, width: 300 }}>
                <Typography variant="h6" component="div">
                    Your Wishlisted Products
                </Typography>
                <Grid container spacing={2}>
                    {wishlistedProducts.map((product) => (
                        <Grid item xs={12} key={product.id}>
                                <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                    <CardMedia
                                        sx={{ width: 60, height: 60, marginRight: 2 }}
                                        image={product.image}
                                        title={product.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            ssddllff
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ₹999
                                        </Typography>
                                    </CardContent>
                                </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Popover>
    );
}


function CartPopover({ open, anchorEl, handleClose }) {
    // Replace the following with your logic to fetch and display cart items
    const cartItems = ["Item 1", "Item 2", "Item 3"];

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
            <Box sx={{ p: 2, width: 300 }}>
                <Typography variant="h6" component="div">
                    Your Cart Items
                </Typography>
                <Grid container spacing={2}>
                    {cartItems.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                                {item}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
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
                                <FavoriteIcon sx={{ color: 'black'}} />
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
                                <ShoppingCartIcon sx={{ color: 'black'}} />
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
                            <MenuItem onClick={() => { navigate("/signin") }}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Account</Typography>
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
