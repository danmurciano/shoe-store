import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-div">
        <footer className="footer row">
            <div className="col-3">
                <img src="/icons/logo-white.svg" alt="Brand Logo" />
            </div>
            
            <div className="col-6 copyright-text">
                <p> &copy; 2023 dot.cards text task. All rights reserved. </p>
            </div>

            <div className="col-3 social-icons">
                <img src="/icons/instagram.svg" alt="instagram" />
                <img src="/icons/twitter.svg" alt="twitter" />
                <img src="/icons/youtube.svg" alt="youtube" />
            </div>
        </footer>
    </div>
  );
};

export default Footer;
