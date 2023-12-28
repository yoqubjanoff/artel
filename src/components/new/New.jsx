import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  konditsioner,
  kirmoshina,
  tv,
  gazPlita,
} from "../../assets/images/index";
import "./New.css";

const New = () => {
  const newTecs = [
    {
      id: 1,
      image: konditsioner,
      title: "Инверторный кондиционер Artel Baraka Inverter",
    },
    {
      id: 2,
      image: kirmoshina,
      title: "Автоматическая стиральная машина Artel Grand Inverter ",
    },
    {
      id: 3,
      image: tv,
      title: "Телевизор Artel  A85LU9500",
    },
    {
      id: 4,
      image: gazPlita,
      title: "Мульти плита Artel Grand Appetito 04-Е",
    },
    {
      id: 5,
      image: konditsioner,
      title: "Инверторный кондиционер Artel Baraka Inverter",
    },
    {
      id: 6,
      image: kirmoshina,
      title: "Автоматическая стиральная машина Artel Grand Inverter ",
    },
    {
      id: 7,
      image: tv,
      title: "Телевизор Artel  A85LU9500",
    },
    {
      id: 8,
      image: gazPlita,
      title: "Мульти плита Artel Grand Appetito 04-Е",
    },
  ];

  return (
    <>
      <section className='new-section'>
        <div className='container'>
          <div className='new-wrapper'>
            <h2 className='new-title'>Новинки</h2>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}>
              <ul className='newTec-list'>
                {newTecs.map((item, id) => (
                  <SwiperSlide key={id}>
                    <li className='newTec-list__item'>
                      <img
                        src={item.image}
                        alt='konditsioner'
                        width={320}
                        height={320}
                      />
                      <p className='newTec-list__item-title'>{item.title}</p>
                      <div className='color-btns'>
                        <button className='white'></button>
                        <button className='grey'></button>
                        <button className='black'></button>
                      </div>
                      <button className='newTec-btn'>Узнать больше</button>
                    </li>
                  </SwiperSlide>
                ))}
              </ul>
            </Swiper>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default New;
