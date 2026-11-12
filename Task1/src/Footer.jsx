import React from 'react';
import iconFb from './assets/facebook-icon.png'; 
import iconTw from './assets/twitter-icon.svg';
import iconIg from './assets/instagram-icon.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <img src={iconFb} alt="Facebook" className="social-icon" />
        <img src={iconTw} alt="Twitter" className="social-icon" />
        <img src={iconIg} alt="Instagram" className="social-icon" />
      </div>
      <p className="footer-credit">Copyright © 2023 Erased Disks Ltd.</p>
    </footer>
  );
}

export default Footer;
