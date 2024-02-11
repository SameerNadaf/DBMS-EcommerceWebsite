import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles.css';

function Home (){

  return (
    <div>
      <Header/>
      <div style={{marginBottom: 100}}>
        <section>
        <div class="main" id="Home">
            <div class="main_content">
                <div class="main_text">
                    <h1>Footwear<br/><span>Collection</span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div class="main_image">
                    <img src="/image/shoes.png"/>
                </div>
            </div>
            <div class="social_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div class="button" >
                <a href='/products'>SHOP NOW</a>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
