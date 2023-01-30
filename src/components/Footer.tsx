import React from "react";

export default function Footer () {
  return(
    <div className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={require('../img/footer-logo.png')} alt="footer-logo" />
          </div>
          <div className="footer__info">
            <div className="footer__grafic">
              <p>Время работы: ежедневно с 10.00 до 22.00</p>
            </div>
            <div className="footer__item">
              <div className="footer__address">
                <p>Московский просп., 73, корп. 5, Санкт-Петербург</p>
              </div>
              <div className="footer__number">
                <p>+7 (901) 132-57-78</p>
              </div>
              <div className="footer__address">
                <p>Кушелевская дорога, 1к2, Санкт-Петербург</p>
              </div>
              <div className="footer__number">
                <p>+7 (911) 707-94-16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}