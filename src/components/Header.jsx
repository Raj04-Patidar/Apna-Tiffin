
import React from 'react';
import { Link } from 'react-router-dom';
import tiffin1 from '../assets/images/tiffin6.jpg';
import tiffin3 from '../assets/images/tiffin4.jpg';
import tiffin2 from '../assets/images/tiffin5.jpg';
import background from '../assets/images/background.jpg';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
// import TermCondition from './TermCondition';
// import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';
import Contact from './Contact';

function Header() {
  return (
    <>
    <header
      className="text-center text-md-start p-5 position-relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(9, 9, 9, 0.6)',
          zIndex: 1,
        }}
      ></div>


      <div
        className="d-flex align-items-center"
        style={{ height: '100%', position: 'relative', zIndex: 2 }}
      >
        <div className="text-center text-md-start p-5" style={{ flex: '1' }}>
          <h1 style={{ color: 'white' }}>Welcome to Our Tiffin Center</h1>
          <p className="lead" style={{ color: 'white', fontFamily: 'sans-serif' }}>
            Delicious homemade meals delivered to your doorstep
          </p>
          <Link className="btn btn-dark btn-lg mt-3" to="/MenuSection">
            Explore Our Menu
          </Link>
        </div>

        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ flex: '1.4', height: '90%',}}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner p-5" >
            <div className="carousel-item active">
              <img
                src={tiffin2}
                className="d-block w-100"
                alt="tiffin2"
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius:'60px'
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={tiffin3}
                className="d-block w-100"
                alt="tiffin3"
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius:'60px'
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={tiffin1}
                className="d-block w-100"
                alt="tiffin1"
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius:'60px'
                }}
              />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </header>
    
    <AboutSection />
    <MenuSection />
    <Contact />
    <Footer />
    </>
  );
}

export default Header;

