import React from "react";
import "./style.css";
import textimg from "../../../assets/images/foutrhImg.png";

const FourthSlider = () => {
  return (
    <div className="fourth-slider">
      <div className="container">
        <div className="wrapper">
          <div className="fourth-text-box">
            <img src={textimg} alt="" className="text-img" />
            <p className="fourth-desc">
              <span>ARTEL GRAND APPETITO</span> 04- <span>E</span> MULTI PLITASI
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

export default FourthSlider;
