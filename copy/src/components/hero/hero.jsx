import React, { useState } from "react";
import "./hero.css";
import FirstSlider from "../SliderComponents/FirstSlider";
import SecondSlider from "../SliderComponents/SecondSlider";
import ThreerhSlider from "../SliderComponents/ThreerhSlider";
import arrowleft from "../../assets/icons/arrowleft.png";
import arrowright from "../../assets/icons/arrowright.png";

const components = [FirstSlider, SecondSlider, ThreerhSlider];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );;
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );;
  };

  const SliderComponent = components[activeIndex];
console.log(activeIndex);
  return (
    <div className="Hero">
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="number-box">
            {components.map((_, index) => console.log(index) || (
              <span
                key={index}
                className={index === activeIndex ? "active" : ""}
              >{`0${index + 1}`}</span>
            ))}
          </div>
          <div className="hero-line">
            <div className="nested-line"></div>
          </div>
          <div className="btn-box">
            <button onClick={handlePrevSlide}>
              <img src={arrowleft} alt="" className="arrowleft" />
            </button>
            <button onClick={handleNextSlide}>
              <img src={arrowright} alt="" className="arrowright" />
            </button>
          </div>
        </div>
      </div>
      <SliderComponent />
    </div>
  );
};

export default Hero;
