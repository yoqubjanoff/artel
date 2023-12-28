import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Tavarlar.css";
import arrowleft from "../../assets/icons/arrowleft.png";
import arrowright from "../../assets/icons/arrowright.png";

const Tavarlar = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <section className="tavarlar">
        <div className="container">
          <div className="tavarlar-wrapper">
            <div className="tavarlar-start">
              <h1 className="tavarlar-title">Рекомендуемые товары</h1>
             <div className="btn-boxe">
             <button onClick={goPrev}>
                <img src={arrowleft} alt="" className="arrowleft" />
              </button>
              <button onClick={goNext}>
                <img src={arrowright} alt="" className="arrowright" />
              </button>
             </div>
            </div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              className="my-swiper"
              navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <div className="tavarlar-card card-one">
                  <div className="tavarlar-top">
                    <p className="tavarlar-desc">
                      стиральная машина Artel Grand Inverter
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tavarlar-card card-two">
                  <div className="tavarlar-top">
                    <p className="tavarlar-desc">
                      Телевизор Artel (216 см) Android
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tavarlar-card card-three">
                  <div className="tavarlar-top">
                    <p className="tavarlar-desc">
                      Мешковой пылесос Artel VCB 4537
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tavarlar-card card-one">
                  <div className="tavarlar-top">
                    <p className="tavarlar-desc">
                      стиральная машина Artel Grand Inverter
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tavarlar;
