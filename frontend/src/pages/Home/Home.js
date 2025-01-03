import React from "react";
import "./Home.css";
import { assets } from "./../../assets/assets";

const Home = () => {
  const fivthContainerLlistItem = [
    { name: "Ceiling Lights", image: assets.fivthcotainerHomeimg1 },
    { name: "Outdoor Lighting", image: assets.fivthcotainerHomeimg2 },
    { name: "Ceiling Fans", image: assets.fivthcotainerHomeimg3 },
    { name: "LED Mirrors", image: assets.fivthcotainerHomeimg4 },
    { name: "Wall Lighting", image: assets.fivthcotainerHomeimg5 },
    { name: "Bath Lights", image: assets.fivthcotainerHomeimg6 },
  ];

  return (
    <div className="home-container">
      <div className="home-first-container">
        <h1>NEW YEAR NEW LIGHTING</h1>
        <h4>Lighting Extravaganza - upto 40% OFF until 1/12</h4>
        <button>Shop Now</button>
        <hr className="home-hr" />
        <div className="home-images-container">
          <img src={assets.cwg_png} alt="cng-image" />
          <img src={assets.livex_png} alt="cng-image" />
          <img src={assets.pagione} alt="cng-image" />
          <img src={assets.progressImg} alt="progressImg" />
        </div>
      </div>
      <div className="home-third-container">
        <img
          src={assets.homehero2}
          alt="homehero2"
          className="home-hero-img-1"
        />
        <img
          src={assets.homeheromain}
          alt="homehero2"
          className="home-hero-img-2"
        />
      </div>
      <div className="home-fourth-container">
        <p>People are Searching for</p>
        <ul>
          <li>floor lamps</li>
          <li>wall sconces</li>
          <li>celest visual</li>
          <li>visual comfort </li>
          <li>uttermost decor </li>
          <li>linear chandelier </li>
          <li>table lamps </li>
          <li> wall art</li>
        </ul>
      </div>
      <div className="fivth-container">
        <h2>Shop by Department</h2>
        <div className="fivth-items">
          {fivthContainerLlistItem.map((item, index) => (
            <div className="fivth-item" key={index}>
              <p className="fivth-name">{item.name}</p>
              <img src={item.image} alt={item.name} className="fivth-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
