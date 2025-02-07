import React from 'react';
import Website from './components/Website';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import TermCondition from './components/TermCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardCenter from './components/CardCenter';
import BookTiffin from './components/BookTiffin';
import { ToastContainer } from "react-toastify";
import Layout from './components/Layout';
// import './App.css'

function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <Website />
        <Routes>
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="/" element={<Header />} />
          <Route path="/aboutsection" element={<AboutSection />} />
          <Route path="/menusection" element={<MenuSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/termcondition" element={<TermCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/details/:id" element={<CardCenter />} />
          <Route path="/BookTiffin" element={<BookTiffin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
