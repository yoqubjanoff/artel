import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { ArtelLogo, Menu } from "../../assets/icons/index";
import closeIcon from '../../assets/icons/x.svg'
import "./header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("top");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-start">
              <a className="header-logo" href="#dn">
                <img src={ArtelLogo} alt="Artel" width={122} height={61} />
              </a>
              <span className="line"></span>
              <select className="header-location" name="viloyat">
                <option
                  className="header-location__title"
                  selected
                  value="Ташкент"
                >
                  Ташкент
                </option>
                <option className="header-location__title" value="Наманган">
                  Наманган
                </option>
              </select>
            </div>
            <div className="header-end">
              <label className="lang-icon">
                <select className="lang-select" name="lang">
                  <option value="UZ">UZ</option>
                  <option value="RU" selected>
                    RU
                  </option>
                  <option value="ENG">ENG</option>
                </select>
              </label>
              <a className="header-call" href="tel: +998 78 148-88-88">
                +998 78 148-88-88
              </a>
              <button className="header-nav-btn">Бизнес</button>
              <button className="header-nav-btn menu" onClick={showDrawer}>
                Меню
                <img src={Menu} alt="Menu" width={28} height={28} />
              </button>
            </div>
          </div>
          <div>
            <Drawer
              title=" "
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
              style={{ backgroundColor: "#111913", margin: "0 auto"  }}
              className="custom-drawer"
              extra={
                <Space
                >
                  <div className="container">
                    <div className="header-wrapper">
                      <div className="header-start">
                        <a className="header-logo" href="#dn">
                          <img
                            src={ArtelLogo}
                            alt="Artel"
                            width={122}
                            height={61}
                          />
                        </a>
                        <span className="line"></span>
                        <select className="header-location" name="viloyat">
                          <option
                            className="header-location__title"
                            selected
                            value="Ташкент"
                          >
                            Ташкент
                          </option>
                          <option
                            className="header-location__title"
                            value="Наманган"
                          >
                            Наманган
                          </option>
                        </select>
                      </div>
                      <div className="header-end">
                        <label className="lang-icon">
                          <select className="lang-select" name="lang">
                            <option value="UZ">UZ</option>
                            <option value="RU" selected>
                              RU
                            </option>
                            <option value="ENG">ENG</option>
                          </select>
                        </label>
                        <a
                          className="header-call"
                          href="tel: +998 78 148-88-88"
                        >
                          +998 78 148-88-88
                        </a>
                        <button className="header-nav-btn">Бизнес</button>
                        <button className="closeBtn" onClick={onClose}>Закрыть
                        <img src={closeIcon} alt="" className="closeIcon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Space>
              }
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
