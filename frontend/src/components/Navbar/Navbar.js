import React from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { CiSearch } from "react-icons/ci";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="first-nav-container">
        <p>
          <FaRegUserCircle />
          Are you a Constractor or Design Pro?{" "}
        </p>
      </div>
      <div className="navbar-container">
        <div className="nav-left">
          <img src={assets.nav_logo} alt="logo" className="company-logo" />
          <div className="nav-search-container">
            <input
              placeholder="search for anything"
              type="search"
              className="search-element-nav"
            />
            <CiSearch />
          </div>
        </div>
        <div className="nav-left">
          <div>
            <button className="nav-btn-save">
              <MdOutlineMail /> Save Up to 25%
            </button>
          </div>
          <div className="nav-column-container">
            <RxQuestionMarkCircled className="icons-nav" />
            <p>Support</p>
          </div>
          <div className="nav-column-container">
            <FaRegUser />
            <p>Account</p>
          </div>
          <div className="nav-column-container">
            <FaHeart className="icons-nav" />
            <p>My Favorites</p>
          </div>
          <div className="nav-column-container">
            <FiShoppingCart className="icons-nav" />
            <p>Your Cart</p>
          </div>
        </div>
      </div>
      <hr className="horizontal-line-navbar" />
      <div className="buttom-navbar">
        <ul>
          <li>Brands</li>
          <li>plug & play</li>
          <li>ceiling lights</li>
          <li>chandeliers</li>
          <li>wall lights</li>
          <li>outdoor</li>
          <li>ceiling fans</li>
          <li className="first-active-nav-links">shop by room</li>
          <li className="first-active-nav-links">new</li>
          <li className="first-active-nav-links">learn</li>
          <li className="navlink-buttom">sale</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
