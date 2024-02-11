import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import './product.css';
import Grid from '@mui/material/Grid';

function Products() {
    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:8081/kidsproducts');
            setData(resp.data);
            console.log(resp);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Header />

            <div className="products" id="kidsShoes">
                <h1>Kids Shoes</h1>

                <Grid container spacing={2}>
                    {data.map((d) => (
                        <Grid item xs={12} sm={6} md={3} key={d.id}>
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
                    {data.map((d) => (
                        <Grid item xs={12} sm={6} md={3} key={d.id}>
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
                <h1>Mens Shoes</h1>

                <Grid container spacing={2}>
                    {data.map((d) => (
                        <Grid item xs={12} sm={6} md={3} key={d.id}>
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
