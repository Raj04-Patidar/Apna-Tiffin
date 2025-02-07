import React from 'react';
import images1 from '/src/assets/images/tiffin3.jpeg';
import images2 from '/src/assets/images/tiffin4.jpg';
import images3 from '/src/assets/images/tiffin6.jpg';
import images4 from '/src/assets/images/tiffin5.jpg';
import './aboutsection.css'
import Footer from './Footer';
import Layout from './Layout';

function AboutSection() {
  return (

      <div>
        <section className="about-section" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="image-grid">
                  <img src={images1} alt="Poha" className="grid-img img-1" />
                  <img src={images2} alt="Paneer" className="grid-img img-2" />
                  <img src={images3} alt="Roti" className="grid-img img-3" />
                  <img src={images4} alt="Pizza" className="grid-img img-4" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="about-content">
                  <h5 className="about-title">
                    <span style={{ color: "#F4A460", fontWeight: "bold" }}>
                      About Us
                    </span>{" "}
                    <hr style={{ width: "150px", border: "2px solidrgb(202, 107, 23)" }} />
                  </h5>
                  <h2 className="about-heading">
                    Welcome to <span role="img" aria-label="Tiffin">🍴</span>
                    <span style={{ color: "#10375c", fontWeight: "bold" }}> Apna-Tiffin</span>
                  </h2>
                  <p className="about-text">
                    Experience the epitome of culinary delight with Apna-Tiffin, Indore's premier food and tiffin delivery service.
                    Savor the convenience of gourmet meals delivered right to your doorstep. From delectable cuisines to personalized
                    tiffin options, Apna-Tiffin ensures a gastronomic journey like no other. Embrace the ease of ordering, the joy of diverse
                    flavors, and the assurance of timely deliveries. Elevate your dining experience with Apna-Tiffin - where excellence meets
                    your appetite. Indulge in the No. 1 food and tiffin delivery service in Indore!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
   

  );
};
export default AboutSection;
