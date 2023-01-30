import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-flex">
          <div className="header-item">
            <div className="logo">
              <img src={require('../img/logo.png')} alt="logo" />
            </div>
          </div>
          <div className="header-item header-item-flex">
            <div className="messenger">
              <p className="messenger-text">Свяжитесь со мной в мессенджерах:</p>
              <div className="messenger-icon">
                <a href="#">
                  <img src={require('../img/whatsapp-logo.png')} alt="whatsapp" />
                </a>
              </div>
              <div className="messenger-icon">
                <a href="#">
                  <img src={require('../img/telegram-logo.png')} alt="telegram" />
                </a>
              </div>
            </div>
            <div className="schedule-header">
              <div className="schedule-text">
                <p>Звоните. Пн-вс 10:00-22:00</p>
              </div>
              <div className="schedule-phone">
                <a href="tel:+7 (911) 028-25-46">+7 (911) 028-25-46</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
