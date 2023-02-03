import React from 'react';

export default function Form() {
  return (
    <div className="form">
      <form action="#">
        <div className="form__wrapper">
          <div className="form__title">
            <h4 className="title">Записаться на обучение или задать вопрос</h4>
          </div>
          <div className="form__text">
            <p>Мы с вами свяжемся в ближайшее время</p>
          </div>
          <div className="form__item">
            <input type="text" id="name" placeholder="Имя" className="form__input" />
          </div>
          <div className="form__item">
            <input type="text" id="phone" placeholder="Телефон" className="form__input" />
          </div>
          <div className="form__item">
            <div className="radio">
              <div className="radio__item">
                <input
                  type="radio"
                  name="messenger"
                  id="call"
                  className="form__radio"
                  value="Позвонить"
                  checked
                />
                <label htmlFor="call" className="form__label">
                  Позвонить
                </label>
              </div>
              <div className="radio__item">
                <input
                  type="radio"
                  name="messenger"
                  id="write"
                  className="form__radio"
                  value="Написать в Whatsap"
                />
                <label htmlFor="write" className="form__label">
                  Написать в WhatsApp
                </label>
              </div>
            </div>
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
