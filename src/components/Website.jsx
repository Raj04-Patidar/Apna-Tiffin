import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/images/logo.png';
import './ReactForm.css';

const Website = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{height:'100px'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="140" height="100"/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav mx-auto  mb-lg-0 "style={{fontSize:'22PX', hower:"light"}}>
              <li className="nav-item me-4">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/AboutSection">
                  About
                </Link>
              </li>
              <li className="nav-item me-4 ">
                <Link className="nav-link active" to="/MenuSection">
                  Services
                </Link>
              </li>
              <li className="nav-item me-4 ">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown me-3">
                <Link className="nav-link active" to= "/termcondition">
                  Terms-Condtion
                </Link>
              </li>
            </ul>
            <div className="d-flex" style={{fontSize:'22PX'}}>
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Website;


