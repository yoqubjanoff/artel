import React from "react";
import "./style.css";
import tshort from "../../../assets/icons/tshort.png";
import voltage from "../../../assets/images/voltage.png";

const FirstSlider = () => {
  return (
    <div className="firstslider">
      <div className="container">
        <div className="wrapper">
          <div className="textBox">
            <h2 className="first-title">
              Past kuchlanishda ishlash qobiliyati
            </h2>
            <img src={voltage} alt="" className="voltage" />
            <p className="first-desc">YANGI SOVUTGICH 2023</p>
            <p className="second-desc">
              <span>GRAND INVERTER </span>STEEL EDITION
            </p>
            <div className="btn-box">
              <a role="button" className="btn-one">
                Узнать больше
              </a>
              <a role="button" className="btn-two">
                Выбрать технику
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
