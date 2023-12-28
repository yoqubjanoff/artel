import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className='about'>
        <div className='container'>
          <div className='about-wrapper'>
            <h2 className='about-title'>
              Artel Electronics – крупнейший производитель бытовой техники и
              электроники в Центральной Азии, и один из самых популярных брендов
              в Узбекистане.
            </h2>
            <p className='about-desc'>
              Компания Artel была основана в 2011 году, начав свою историю с
              производства кухонных плит и пылесосов. В настоящее время бренд
              Artel производит 22 продуктовые категории, включая решения для
              гостиной, для кухни, стирки и уборки.
            </p>
            <ul className='about-data-list'>
              <li className='data-list__item one '>
                <strong className='data-list__title'>22</strong>
                <p className='data-list__desc one-desc '>
                  Категорий электроприборов
                </p>
              </li>
              <li className='data-list__item two '>
                <strong className='data-list__title'>14</strong>
                <p className='data-list__desc two-desc '>Стран экспорта</p>
              </li>
              <li className='data-list__item three'>
                <strong className='data-list__title'>55%</strong>
                <p className='data-list__desc three-desc'>
                  Рыночной доли от общего объема рынка в 2023 году
                </p>
              </li>
              <li className='data-list__item four'>
                <strong className='data-list__title'>12</strong>
                <p className='data-list__desc four-desc'>лет на рынке</p>
              </li>
              <li className='data-list__item five'>
                <strong className='data-list__title'>9 000</strong>
                <p className='data-list__desc five-desc'>
                  Специалистов по всей Республике Узбекистан
                </p>
              </li>
            </ul>
            <div className='more'>
              <button className='more-btn'>Узнать больше</button>
              <span className='more-line'></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
