import React from "react";
import "./Uslugi.css";

const Uslugi = () => {
  return (
    <>
      <section className='uslugi-section'>
        <div className='container'>
          <div className='uslugi-wrapper'>
            <h2 className='uslugi-title'>Услуги</h2>
            <ul className='uslugi-list'>
              <li className='uslugi-list__item garanti'>
                <h3 className='uslugi-list__item-title garanti-title'>
                  Условия гарантии{" "}
                </h3>
                <p className='uslugi-list__item-desc garanti-desc'>
                  Получить информацию об условиях гарантии по продуктам
                </p>
              </li>
              <li className='uslugi-list__item info'>
                <h3 className='uslugi-list__item-title info-title'>
                  Информация о продуктах
                </h3>
                <p className='uslugi-list__item-desc info-desc'>
                  Получить доступ ко всем сведениям о ваших продуктах
                </p>
              </li>
              <li className='uslugi-list__item servis'>
                <h3 className='uslugi-list__item-title servis-title'>
                  Поддержка и сервис{" "}
                </h3>
                <p className='uslugi-list__item-desc servis-desc'>
                  Оставить заявку на ремонт продукта
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Uslugi;
