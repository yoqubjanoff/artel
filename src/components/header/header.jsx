import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { ArtelLogo, Menu } from "../../assets/icons/index";
import closeIcon from "../../assets/icons/x.svg";
import modalImg1 from "../../assets/images/modal1.jpg";
import modalImg2 from "../../assets/images/modal2.jpg";
import "./header.css";
import { Link } from "react-router-dom";
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
              style={{ backgroundColor: "#111913" }}
              height={'auto'}
              className="custom-drawer"
              extra={
                <Space>
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
                    <div className="header-modal">
                      <label className="lang-icon-modal">
                        <select className="lang-select" name="lang">
                          <option value="UZ">UZ</option>
                          <option value="RU" selected>
                            RU
                          </option>
                          <option value="ENG">ENG</option>
                        </select>
                      </label>
                      <a
                        className="header-call-modal"
                        href="tel: +998 78 148-88-88"
                      >
                        0800-120-55 55
                      </a>
                      <button className="modalBtn">Бизнес</button>
                      <button className="closeBtn" onClick={onClose}>
                        Закрыть
                        <img src={closeIcon} alt="" className="closeIcon" />
                      </button>
                    </div>
                  </div>
                </Space>
              }
            >
              <div className="modal-bottom-box">
                <div className="modal-bottom-wrap">
                  <div className="image-box">
                    <div className="row-box">
                      <div className="row-image-box1">
                        <p className="row-image-desc">Новинки</p>
                      </div>
                      <div className="row-image-box2">
                        <p className="row-image-desc">Акции</p>
                      </div>
                    </div>
                    <div className="column-box">
                      <div className="column-image-box1">
                        <p className="column-image-desc">Для гостиной </p>
                      </div>
                      <div className="column-image-box2">
                        <p className="column-image-desc">Для кухни </p>
                      </div>
                      <div className="column-image-box3">
                        <p className="column-image-desc">Для стирки уборки </p>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-box">
                    <div className="start-box">
                      <Link className="modal-link" to=''>О компании</Link>
                      <Link className="modal-link" to=''>Новости</Link>
                      <Link className="modal-link" to=''>ГДе купить</Link>
                      <Link className="modal-link" to=''>Мой профиль</Link>
                      <Link className="modal-link" to=''>Скачать католог</Link>
                      <Link className="modal-link" to=''>Скачать инструкцию</Link>
                      <Link className="modal-link" to=''>Наши контакты</Link>
                    </div>
                    <div className="end-box">
                      <Link className="modal-link" to=''>Сервис</Link>
                      <Link className="modal-link" to=''>Гарантия</Link>
                      <Link className="modal-link" to=''>Аксессуары и запчасти</Link>
                      <Link className="modal-link" to=''>Заявка на ремонт</Link>
                      <Link className="modal-link" to=''>Зарегистрировать продукт</Link>
                      <Link className="modal-link" to=''>Мои продукты</Link>
                      <Link className="modal-link" to=''>Проверить статус</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
