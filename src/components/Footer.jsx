import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center',
        padding: '30px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >

        <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '10px', color: '#f8b400' }}>Company</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/AboutSection" style={linkStyle}>About</Link>
            <Link to="/MenuSection" style={linkStyle}>Services</Link>
            <Link to="/Contact" style={linkStyle}>Contact</Link>
            <Link to="/TermCondition" style={linkStyle}>Terms & Conditions</Link>
            <Link to="/privacyPolicy" style={linkStyle}>Privacy Policy</Link>
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '10px', color: '#f8b400' }}>Contact</h2>
          <ul style={listStyle}>
            <li><i className="bi bi-geo-alt-fill" style={iconStyle}></i> Indore, M.P.</li>
            <li><i className="bi bi-telephone-fill" style={iconStyle}></i> +91 99xxx-xxxxx</li>
            <li><i className="bi bi-envelope-fill" style={iconStyle}></i> apnatiffin@gmail.com</li>
          </ul>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '10px', color: '#f8b400' }}>Follow Us</h2>
          <ul style={{ ...listStyle, display: 'flex', gap: '10px' }}>
            <li><i className="bi bi-whatsapp" style={iconStyle}></i></li>
            <li><i className="bi bi-facebook" style={iconStyle}></i></li>
            <li><i className="bi bi-instagram" style={iconStyle}></i></li>
            <li><i className="bi bi-linkedin" style={iconStyle}></i></li>
            <li><i className="bi bi-twitter" style={iconStyle}></i></li>
          </ul>
        </div>
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', opacity: '0.8' }}>
        © 2025 Apna Tiffin. All Rights Reserved.
      </p>
    </footer>
  );
}

// Styles
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  transition: '0.3s',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  fontSize: '16px',
};

const iconStyle = {
  marginRight: '8px',
  fontSize: '18px',
  color: '#fff',
};

export default Footer;
