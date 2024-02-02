import React from 'react';
import '../dashboard.css';
import BarChat from '../components/barChat';
import PieChart from '../components/pieChart';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import Sidebar from '../components/sidebar';
import Typography from '@mui/material/Typography';


function Home() {
    return (
        <div className='bgcolor'>
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack direction="row" spacing={2}>
                                <Card id='gradient' sx={{ height: 152, minWidth: 49 + "%" }} >
                                    <CardContent>
                                        <div id='iconstyle2'>
                                            <CreditCardIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff", marginLeft: 20 + 'px' }}>
                                            ₹5000
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1", marginLeft: 20 + 'px' }}>
                                            Total Earning
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card id='gradient1' sx={{ height: 152, minWidth: 49 + "%" }}>
                                    <CardContent>
                                        <div id='iconstyle3'>
                                            <LocalShippingIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff", marginLeft: 20 + 'px' }}>
                                            222
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1", marginLeft: 20 + 'px' }}>
                                            Total Orders
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <Card id='gradient2' sx={{ minWidth: 345 }}>
                                    <Stack direction="row" spacing={2}>
                                        <div id='iconstyle'>
                                            <CategoryIcon />
                                        </div>
                                        <div id='paddingAll' >
                                            <span id='cardtitle' >222</span>
                                            <br />
                                            <span id='cardsubtitle' >Total Products</span>
                                        </div>
                                    </Stack>
                                </Card>
                                <Card sx={{ minWidth: 345 }}>
                                    <Stack direction="row" spacing={2}>
                                        <div id='iconstyle1'>
                                            <PersonIcon />
                                        </div>
                                        <div id='paddingAll1' >
                                            <span id='cardtitle1' >111</span>
                                            <br />
                                            <span id='cardsubtitle1' >Total Users</span>
                                        </div>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                    <BarChat />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                    <PieChart />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;
