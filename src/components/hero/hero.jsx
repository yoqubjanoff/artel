import React, { useState, useEffect } from "react";
import "./hero.css";
import FirstSlider from "../SliderComponents/FirstSlider";
import SecondSlider from "../SliderComponents/SecondSlider";
import ThreerhSlider from "../SliderComponents/ThreerhSlider";
import arrowleft from "../../assets/icons/arrowleft.png";
import arrowright from "../../assets/icons/arrowright.png";
import FourthSlider from "../SliderComponents/FourthSlider";

const components = [FirstSlider, SecondSlider, ThreerhSlider, FourthSlider];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const calculateLineWidth = () => {
      const heroLine = document.querySelector(".hero-line");
      const heroLineWidth = heroLine.offsetWidth;
      const singleStepWidth = heroLineWidth / components.length;
      const currentLineWidth = (activeIndex + 1) * singleStepWidth;
      setLineWidth(currentLineWidth);
    };

    calculateLineWidth();
    window.addEventListener("resize", calculateLineWidth);

    return () => {
      window.removeEventListener("resize", calculateLineWidth);
    };
  }, [activeIndex]);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const SliderComponent = components[activeIndex];

  return (
    <div className='Hero' id="header">
        <div className='hero-container'>
          <div className='hero-wrapper'>
            <div className='number-box'>
              {components.map((_, index) => (
                <span
                  key={index}
                  style={{
                    opacity: index === activeIndex ? 1 : 0.7,
                  }}
                  className={index === activeIndex ? "active" : ""}>{`0${
                  index + 1
                }`}</span>
              ))}
            </div>
            <div className='hero-line'>
              <div
                style={{ width: `${lineWidth}px` }}
                className='nested-line'></div>
            </div>
            <div className='btn-box'>
              <button onClick={handlePrevSlide}>
                <img src={arrowleft} alt='' className='arrowleft' />
              </button>
              <button onClick={handleNextSlide}>
                <img src={arrowright} alt='' className='arrowright' />
              </button>
            </div>
          </div>
        </div>
        <SliderComponent />
    </div>
  );
};

export default Hero;
