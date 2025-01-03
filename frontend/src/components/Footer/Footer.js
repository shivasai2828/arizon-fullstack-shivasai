import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaInstagram } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Order Status</li>
            <li>Returns & Replacements</li>
            <li>International Shipping</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Shopping</h4>
          <ul>
            <li>On Sale Items</li>
            <li>Our Brands</li>
            <li>Product Features</li>
            <li>Trade Customers</li>
            <li>View Your Cart</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company Info</h4>
          <ul>
            <li>About Us</li>
            <li>Partners</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Affiliate Program</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Support</h4>
          <p className="support-ref">Ref # R101300873</p>
          <p>Already Ordered?</p>
          <ul>
            <li>File a Return or Replacement</li>
            <li>View Order Status</li>
            <li>Visit Our HelpDesk</li>
          </ul>
          <p>Ready to Order?</p>
          <ul>
            <li>📞 Call Us</li>
            <li>Monday-Friday 6am - 5pm PST</li>
            <li>💬 Online Chat</li>
            <li>Monday-Friday 6am - 4pm PST</li>
            <li>Saturday & Sunday 6am - 3pm PST</li>
          </ul>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-social">
          <span>© 202 5 1STOPLighting.com. All Rights Reserved.</span>
          <div className="social-icons">
            <FaInstagram />
            <BsPinterest />
            <FaTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
        <div className="footer-payment">
          <img src={assets.footerimg1} alt="BBB" />
          <img src={assets.footerimg2} alt="PayPal" />
          <img src={assets.footerimg3} alt="Credit Cards" />
          <img src={assets.footerimg4} alt="Credit Cards" />

          {/* Add other payment logos */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
