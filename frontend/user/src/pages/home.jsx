import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles.css';

function Home (){

  return (
    <>
      <Header/>
      <div style={{marginBottom: 100}}>
        <section>
        <div className="main" id="Home">
            <div className="main_content">
                <div className="main_text">
                    <h1>Footwear<br/><span>Collection</span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="main_image">
                    <img src="/image/shoes.png"/>
                </div>
            </div>
            <div className="social_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="button" >
                <a href='/products'>SHOP NOW</a>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home
