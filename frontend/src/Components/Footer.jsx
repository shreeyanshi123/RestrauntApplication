import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div className="footer">
            <div className="header-row">
                <h3>Address</h3>
                <h3>Helpful Links</h3>
                <h3>Overview</h3>
                <h3>Subscribe</h3>
            </div>

            <div className="content">
                <div className="address">
                    <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p>Contact Info: info@example.com</p>
                    <p>Call Us: 000 - 123 - 456789</p>
                </div>

                <div className="helpful-links">
                    <p>Search Terms</p>
                    <p>Help & Faq's</p>
                    <p>Store Location</p>
                    <p>Order & Return</p>
                </div>

                <div className="overview">
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Return & Refund</p>
                    <p>Deliveries</p>
                </div>

                <div className="subscribe">
                    <div className="box">
                        <input placeholder="Your email address" type="email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='line'>

            </div>
        </div>

    );
};

export default Footer;
