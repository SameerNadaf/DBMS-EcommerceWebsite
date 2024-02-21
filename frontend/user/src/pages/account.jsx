import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';


function account() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 70, display: 'flex' }}>

        <div style={{ width: '40%', padding: '20px', overflow: 'auto' }}>
          <Card sx={{ maxWidth: 400, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            {/* Profile Picture */}
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/image/profile.png"
              sx={{
                height: 150,
                width: 150,
                borderRadius: '50%',
                margin: 'auto',
                marginTop: 5,
                marginBottom: 3
              }}
            />

            <Divider variant="middle" sx={{ width: '80%', margin: '16px auto' }} />
            
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                USER PROFILE
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '16px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                ORDERS
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '16px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                CART
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '16px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                WISHLIST
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '16px auto' }} />

            <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
              <Button size="small" variant="outlined" color="primary">
                Share Profile
              </Button>
              <Button size="small" variant="outlined" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div style={{ width: '60%', padding: '20px' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Well Played GG || Sameer Nadaf
          </Typography>
        </div>

      </div >
      <Footer />
    </>
  )
}

export default account
