import React from "react";
import "./style.css";
import tshort from "../../../assets/icons/tshort.png";
import dolby from '../../../assets/images/threeImg.png'


const ThreerhSlider = () => {
  return (
    <div className="three-slider">
      <div className="container">
        <div className="wrapper">
          <div className="three-textBox">
            <p className="three-text">YANGI HISSIYOTLAR BILAN TOMOSHA QILING</p>
            <img src={dolby} alt="logo" className="treeImg" />
              <p className="three-desc">
                 <span>ARTEL TV </span>A85LU9500
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

export default ThreerhSlider;
