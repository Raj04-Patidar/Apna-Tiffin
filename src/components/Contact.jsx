import React from 'react';
import backgroundImage from '../assets/images/contact.jpg';
import Layout from './Layout';

function Contact() {
  return (

 
        <section
          id="contact"
          style={{
            backgroundColor: '#f7f7f7',
            height: '100vh',
            padding: '50px 0',
          }}
        >
          <div className="container d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div style={{ fontSize: "2.5rem", fontFamily: 'cursive', color: '#10375c', marginBottom: '10px' }}>
                <h2 className="text-center mb-3">Contact Us</h2>
                <h2 className="text-center mb-3">Contact For Any Query</h2>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                ></div>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >

                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
   

  );
}

export default Contact;
