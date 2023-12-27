import React from "react";
import Header from "../header/header";
import "./hero.css";

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='container'>
        <Header />
        <div className='hero-secton'></div>
      </div>
    </div>
  );
};

export default Hero;
