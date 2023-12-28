import React from "react";
import {
  ArtelLogo,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Up,
} from "../../assets/icons/index";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='site-footer'>
        <div className='container'>
          <div className='footer-wrapper'>
            <a className='up' href='#header'>
              <img src={Up} alt='Up' width={70} height={70} />
            </a>
            <div className='footer-double'>
              <div className='footer-start'>
                <img
                  className='footer-logo'
                  src={ArtelLogo}
                  alt='Artel'
                  width={122}
                  height={61}
                />
                <ul className='footer-social-list'>
                  <li className='footer-social-item'>
                    <img src={Facebook} alt='Facebook' width={54} height={54} />
                  </li>
                  <li className='footer-social-item'>
                    <img src={Twitter} alt='Twitter' width={54} height={54} />
                  </li>
                  <li className='footer-social-item'>
                    <img
                      src={Instagram}
                      alt='Instagram'
                      width={54}
                      height={54}
                    />
                  </li>
                </ul>
                <p className='footer-start-title'>© 2023 Artel</p>
              </div>
              <div className='footer-middle'>
                <ul className='footer-middle__list footer-list-one'>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>О компании</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Новости</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Где купить</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Мой профиль</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Скачать католог</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>
                      Скачать инструкцию
                    </p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Наши контакты</p>
                  </li>
                </ul>
                <ul className='footer-middle__list footer-list-two'>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Сервис</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Гарантия</p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>
                      Аксессуары и запчасти
                    </p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>
                      Заявка на ремонт
                    </p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>
                      Зарегистрировать продукт
                    </p>
                  </li>
                  <li className='footer-middle__list-item'>
                    <p className='footer-middle__item-title'>Мои продукты</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer-end'>
              <p className='footer-end__title'>Наши контакты</p>
              <a className='footer-tel' href='tel:0800-120-55 55'>
                <img src={Phone} alt='Phone' width={24} height={24} />
                0800-120-55 55
              </a>
              <a className='footer-tel' href='mailto: info@artel.uz'>
                <img src={Mail} alt='Mail' width={24} height={24} />
                info@artel.uz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
