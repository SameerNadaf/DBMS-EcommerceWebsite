import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles.css';

function ContactUs() {
  return (
    <>
      <Header />
      <div className="contact">

        <h1>Contact<span>Us</span></h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nihil dignissimos, molestias, dolorem
          fugiat qui dolore aliquam accusamus repellat ea cum pariatur iusto quasi consequatur voluptate inventore
          voluptas saepe. Maxime quaerat nobis ab veritatis dignissimos quae, eius tempore quis. Voluptatum blanditiis
          quae quas explicabo magni sequi corrupti eos distinctio iusto officia, quod aspernatur dolores laborum velit
          esse eveniet hic error facere quaerat tempore et facilis molestiae nobis dolor! Eius laboriosam soluta
          nostrum, dolores in iste sint repudiandae perferendis aspernatur nesciunt ipsam voluptatum quidem id eaque
          adipisci unde numquam harum quas? Iure sed accusantium deleniti modi molestias, totam tempore nam facere.
        </p>

      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122809.84860114464!2d74.42603886189339!3d15.866697517099992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669f5095362f%3A0x7e34b31edcdefb5f!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706183085906!5m2!1sen!2sin"
          width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs;
