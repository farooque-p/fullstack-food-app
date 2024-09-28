import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Praesent iaculis pharetra sem sed scelerisque. Nunc aliquam blandit
            quam sit amet pellentesque. Praesent ac dignissim lorem, ut volutpat
            massa. Proin semper mi nisl, id molestie metus dictum molestie.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Get In Touch</h3>
          <ul>
            <li>0987654321</li>
            <li>example@domain.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copright 2024 &copy; Tomato - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
