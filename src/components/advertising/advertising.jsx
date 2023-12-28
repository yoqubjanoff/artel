import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { fridge, advertisingTitle } from "../../assets/images/index";
import {
  BioFresh,
  Dvigitel,
  Icon,
  Inverter,
  Sistema,
  Ten,
  Ultra,
  Volt,
  Weight,
} from "../../assets/icons/index";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./advertising.css";

const Advertising = () => {
  return (
    <section className='advertising'>
      <div className='container'>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className='advertising-wrapper'>
              <img src={fridge} alt='fridge' width={753} height={927} />
              <div className='advertising-end'>
                <img src={advertisingTitle} alt='' width={410} height={277} />
                <div className='brands'>
                  <img src={Inverter} alt='Inverter' width={180} height={104} />
                  <img src={BioFresh} alt='Inverter' width={180} height={104} />
                  <img src={Sistema} alt='Inverter' width={202} height={104} />
                </div>
                <ul className='advertising-data__list'>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Ultra}
                      alt='Ultra Clouding'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Ultra Cooling</span> - охлаждает продукты на 24%
                      быстрее и сохраняет температуру внутри холодильника даже в
                      случае с перебоями.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img let'
                      src={Ten}
                      alt='10 лет'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span> 10 лет</span> полной гарантии на компрессор.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Volt}
                      alt='Volt Control'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Volt Control </span>- При резком скачке напряжения
                      до 400 Вольт холодильник продолжает работать в штатном
                      режиме без перебоев и отключений.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Dvigitel}
                      alt='Dvigitel'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>двигатель</span> работает тихо всего на 37 дБ.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Weight}
                      alt='Полки из каленого стекла'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Полки из каленого стекла </span>выдержат
                      внушительные 150 кг нагрузки и прослужат вам долгие годы.
                    </h4>
                  </li>
                </ul>
                <div className='advertising-btns'>
                  <button className='advertising-video-btn btn'>
                    Посмотреть видео
                    <img src={Icon} alt='Arrow' width={24} height={24} />
                  </button>
                  <button className='advertising-more-btn btn'>
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='advertising-wrapper'>
              <img src={fridge} alt='fridge' width={753} height={927} />
              <div className='advertising-end'>
                <img src={advertisingTitle} alt='' width={410} height={277} />
                <div className='brands'>
                  <img src={Inverter} alt='Inverter' width={180} height={104} />
                  <img src={BioFresh} alt='Inverter' width={180} height={104} />
                  <img src={Sistema} alt='Inverter' width={202} height={104} />
                </div>
                <ul className='advertising-data__list'>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Ultra}
                      alt='Ultra Clouding'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Ultra Cooling</span> - охлаждает продукты на 24%
                      быстрее и сохраняет температуру внутри холодильника даже в
                      случае с перебоями.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img let'
                      src={Ten}
                      alt='10 лет'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span> 10 лет</span> полной гарантии на компрессор.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Volt}
                      alt='Volt Control'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Volt Control </span>- При резком скачке напряжения
                      до 400 Вольт холодильник продолжает работать в штатном
                      режиме без перебоев и отключений.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Dvigitel}
                      alt='Dvigitel'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>двигатель</span> работает тихо всего на 37 дБ.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Weight}
                      alt='Полки из каленого стекла'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Полки из каленого стекла </span>выдержат
                      внушительные 150 кг нагрузки и прослужат вам долгие годы.
                    </h4>
                  </li>
                </ul>
                <div className='advertising-btns'>
                  <button className='advertising-video-btn btn'>
                    Посмотреть видео
                    <img src={Icon} alt='Arrow' width={24} height={24} />
                  </button>
                  <button className='advertising-more-btn btn'>
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='advertising-wrapper'>
              <img src={fridge} alt='fridge' width={753} height={927} />
              <div className='advertising-end'>
                <img src={advertisingTitle} alt='' width={410} height={277} />
                <div className='brands'>
                  <img src={Inverter} alt='Inverter' width={180} height={104} />
                  <img src={BioFresh} alt='Inverter' width={180} height={104} />
                  <img src={Sistema} alt='Inverter' width={202} height={104} />
                </div>
                <ul className='advertising-data__list'>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Ultra}
                      alt='Ultra Clouding'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Ultra Cooling</span> - охлаждает продукты на 24%
                      быстрее и сохраняет температуру внутри холодильника даже в
                      случае с перебоями.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img let'
                      src={Ten}
                      alt='10 лет'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span> 10 лет</span> полной гарантии на компрессор.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Volt}
                      alt='Volt Control'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Volt Control </span>- При резком скачке напряжения
                      до 400 Вольт холодильник продолжает работать в штатном
                      режиме без перебоев и отключений.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Dvigitel}
                      alt='Dvigitel'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>двигатель</span> работает тихо всего на 37 дБ.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Weight}
                      alt='Полки из каленого стекла'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Полки из каленого стекла </span>выдержат
                      внушительные 150 кг нагрузки и прослужат вам долгие годы.
                    </h4>
                  </li>
                </ul>
                <div className='advertising-btns'>
                  <button className='advertising-video-btn btn'>
                    Посмотреть видео
                    <img src={Icon} alt='Arrow' width={24} height={24} />
                  </button>
                  <button className='advertising-more-btn btn'>
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='advertising-wrapper'>
              <img src={fridge} alt='fridge' width={753} height={927} />
              <div className='advertising-end'>
                <img src={advertisingTitle} alt='' width={410} height={277} />
                <div className='brands'>
                  <img src={Inverter} alt='Inverter' width={180} height={104} />
                  <img src={BioFresh} alt='Inverter' width={180} height={104} />
                  <img src={Sistema} alt='Inverter' width={202} height={104} />
                </div>
                <ul className='advertising-data__list'>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Ultra}
                      alt='Ultra Clouding'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Ultra Cooling</span> - охлаждает продукты на 24%
                      быстрее и сохраняет температуру внутри холодильника даже в
                      случае с перебоями.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img let'
                      src={Ten}
                      alt='10 лет'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span> 10 лет</span> полной гарантии на компрессор.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Volt}
                      alt='Volt Control'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Volt Control </span>- При резком скачке напряжения
                      до 400 Вольт холодильник продолжает работать в штатном
                      режиме без перебоев и отключений.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Dvigitel}
                      alt='Dvigitel'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>двигатель</span> работает тихо всего на 37 дБ.
                    </h4>
                  </li>
                  <li className='advertising-data__item'>
                    <img
                      className='advertising-data__item-img'
                      src={Weight}
                      alt='Полки из каленого стекла'
                      width={108}
                      height={62}
                    />
                    <span className='advertising-line'></span>
                    <h4 className='advertising-data__item-title'>
                      <span>Полки из каленого стекла </span>выдержат
                      внушительные 150 кг нагрузки и прослужат вам долгие годы.
                    </h4>
                  </li>
                </ul>
                <div className='advertising-btns'>
                  <button className='advertising-video-btn btn'>
                    Посмотреть видео
                    <img src={Icon} alt='Arrow' width={24} height={24} />
                  </button>
                  <button className='advertising-more-btn btn'>
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Advertising;
