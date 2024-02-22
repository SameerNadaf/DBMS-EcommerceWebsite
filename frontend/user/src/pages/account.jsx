import Header from '../components/header';
import Footer from '../components/footer';
import './product.css';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';



function account() {

  const [orderDetails, setOrderDetails] = useState([
    {
      id: 1,
      product: {
        title: 'Product 1',
        price: 29.99,
        image: 'product1.jpg', // Replace with the actual image URL
      },
    },
    {
      id: 2,
      product: {
        title: 'Product 2',
        price: 39.99,
        image: 'product2.jpg', // Replace with the actual image URL
      },
    },
    // Add more order details as needed
  ]);

  return (
    <>
      <Header />
      <div style={{ marginTop: 70, display: 'flex' }}>

        <div style={{ width: '40%', padding: '20px' }}>
          <Card id='profile' sx={{ maxWidth: 400, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/image/user.png"
              sx={{
                height: 150,
                width: 150,
                borderRadius: '50%',
                margin: 'auto',
                marginTop: 5,
                marginBottom: 4
              }}
            />

            <Divider variant="middle" sx={{ width: '80%', margin: '12px auto' }} />
            
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold'}} >
                USER
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: "#ccd1d1"}} >
                user@gmail.com
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '12px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                ORDERS
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '12px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                CART
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '12px auto' }} />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
                WISHLIST
              </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ width: '80%', margin: '12px auto' }} />

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

        <div style={{ width: '60%', padding: '20px', overflow: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Order Details
          </Typography>
          
          {orderDetails.map((order) => (
            <Card key={order.id} sx={{ marginBottom: 2 }}>
              <CardMedia
                component="img"
                alt={order.product.title}
                image={`http://localhost:8081/images/${order.product.image}`}
                sx={{ height: 100 }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {order.product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${order.product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Pay Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>

      </div >
      <Footer />
    </>
  )
}

export default account
