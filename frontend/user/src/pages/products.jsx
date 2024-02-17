import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import './product.css';
import Grid from '@mui/material/Grid';

function Products() {

    useEffect(() => {
        fetchMen();
        fetchWomen();
        fetchKids();
    }, []);

    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [kids, setKids] = useState([]);

    const fetchMen = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/menproducts');
            setMen(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchWomen = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/womenproducts');
            setWomen(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchKids = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/kidsproducts');
            setKids(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Header />

            <div className="products" id="kidsShoes">
                <h1>Mens Shoes</h1>

                <Grid container spacing={2}>
                    {men?.map((d, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <div className="box">
                                <div className="card">
                                    <div className="small_card">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <div className="image">
                                        {d.image && (
                                            <img
                                                src={`http://localhost:8081/images/${d.image}`}
                                                alt="Product Image"
                                            />
                                        )}
                                    </div>
                                    <div className="products_text">
                                        <h2>{d.title}</h2>
                                        <p>{d.description}</p>
                                        <h3>₹{d.price}</h3>
                                        <div className="products_star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <a href="#" className="btn">
                                            Add To Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="products" id="kidsShoes">
                <h1>Womens Shoes</h1>

                <Grid container spacing={2}>
                    {women?.map((d, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <div className="box">
                                <div className="card">
                                    <div className="small_card">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <div className="image">
                                        {d.image && (
                                            <img
                                                src={`http://localhost:8081/images/${d.image}`}
                                                alt="Product Image"
                                            />
                                        )}
                                    </div>
                                    <div className="products_text">
                                        <h2>{d.title}</h2>
                                        <p>{d.description}</p>
                                        <h3>₹{d.price}</h3>
                                        <div className="products_star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <a href="#" className="btn">
                                            Add To Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="products" id="kidsShoes">
                <h1>Kids Shoes</h1>

                <Grid container spacing={2}>
                    {kids?.map((d, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <div className="box">
                                <div className="card">
                                    <div className="small_card">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <div className="image">
                                        {d.image && (
                                            <img
                                                src={`http://localhost:8081/images/${d.image}`}
                                                alt="Product Image"
                                            />
                                        )}
                                    </div>
                                    <div className="products_text">
                                        <h2>{d.title}</h2>
                                        <p>{d.description}</p>
                                        <h3>₹{d.price}</h3>
                                        <div className="products_star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <a href="#" className="btn">
                                            Add To Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </div>

            <Footer />
        </div>
    );
}

export default Products;
