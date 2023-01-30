import React from 'react';

export default function Form() {
  return (
    <div className="form">
      <form action="#">
        <div className="form__wrapper">
          <div className="form__title">
            <h4 className="title">Онлайн запись</h4>
          </div>
          <div className="form__text">
            <p>Оставьте свои данные, и менеджер свяжется с вами для подтверждения заказа</p>
          </div>
          <div className="form__item">
            <input type="text" id="name" placeholder="Имя" className="form__input" />
          </div>
          <div className="form__item">
            <input type="text" id="phone" placeholder="Телефон" className="form__input" />
          </div>
          <div className="form__item">
            <input
              type="text"
              id="messenger"
              placeholder="Telegram (@hochu_krasivo)"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <input type="submit" id="submit" className="form__button" />
          </div>
          <div className="form__privacy">
            <p>
              Нажимая на кнопку, вы соглашаетесь с нашей{' '}
              <a href="#" className="green__color">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
