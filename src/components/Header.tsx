import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-flex">
          <div className="header-item">
            <Link to='/'>
              <div className="logo">
                <img className='white-logo' src={require('../img/logo-white.png')} alt="logo-light" />
                <img src={require('../img/logo.png')} alt="logo-dark" className="dark-logo" />
              </div>
            </Link>
          </div>
          <div className="header-item header-item-flex">
            <div className="messenger">
              <p className="messenger-text">Свяжитесь с нами в мессенджерах:</p>
              <div className="messenger-icon">
                <a href="https://wa.me/+79110282546" target='_blank'>
                  <img src={require('../img/whatsapp-logo.png')} alt="whatsapp" />
                </a>
              </div>
              <div className="messenger-icon">
                <a href="https://t.me/marinahochukrasivo" target="_blank">
                  <img src={require('../img/telegram-logo.png')} alt="telegram" />
                </a>
              </div>
            </div>
            <div className="schedule-header">
              <div className="schedule-text">
                <p>Звоните. Пн-вс 10:00-22:00</p>
              </div>
              <div className="schedule-phone">
                <a href="tel:+7 (911) 028-25-46" className='phone'>+7 (911) 028-25-46</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
