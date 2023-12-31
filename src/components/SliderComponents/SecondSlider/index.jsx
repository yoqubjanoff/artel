import React from "react";
import "./style.css";
import tshort from "../../../assets/icons/tshort.png";

const SecondSlider = () => {
  return (
    <div className="second-slider">
      <div className="container">
        <div className="wrapper">
          <div className="textBox">
            <p className="newstext">
              YANGI <span>2023</span> GRAND INVERTER
            </p>
            <p className="toptex">KIYIMLARINGIZ KIR</p>
            <h2 className="maintex">BO‘LISHIDAN</h2>
            <div className="text-image-box">
              <img src={tshort} alt="wear img" className="shortimg"/>
              <p className="desc">
                Gipoallergen <span>kir yuvish</span>
              </p>
            </div>
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

export default SecondSlider;
