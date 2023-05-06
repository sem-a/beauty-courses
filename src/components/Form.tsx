import React, { useEffect } from 'react';
import { phone } from '../ts/script';

export default function Form() {
  const formError = (e: any) => {
    e.preventDefault();
    const name = document.getElementById('name') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const form = document.getElementById('form') as HTMLFormElement;
    let error = false;
    const text = document.querySelector('.form__error') as HTMLElement;

    if (name.value == '' || name.value == 'Имя') {
      name.classList.add('error');
      error = true;
    } else {
      name.classList.remove('error');
    }
    if (phone.value == '' || phone.value == 'Телефон' || phone.value.length != 17) {
      phone.classList.add('error');
      error = true;
    } else {
      phone.classList.remove('error');
    }

    // const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    // const valid = re.test(phone.value);
    // if (valid) {
    //   phone.classList.add('error');
    //   error = true
    // } else {
    //   phone.classList.remove('error');
    // }

    console.log(error);
    if (error == false) {
      HTMLFormElement.prototype.submit.call(form);
      alert('Ваша заяка отправлена! Мы скоро свяжемся с вами');
    }
  };

  useEffect(() => {
    phone();
  });

  return (
    <div className="form">
      <form id="form" action={require('../php/mail.php')} method="post">
        <div className="form__wrapper">
          <div className="form__title">
            <h4 className="title">Записаться на обучение или задать вопрос</h4>
          </div>
          <div className="form__text">
            <p>Мы с вами свяжемся в ближайшее время</p>
          </div>
          <div className="form__item">
            <input type="text" name="name" id="name" placeholder="Имя" className="form__input" />
          </div>
          <div className="form__item">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Телефон"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <div className="radio">
              <div className="radio__item">
                <input
                  type="radio"
                  name="messenger"
                  id="call"
                  className="form__radio"
                  value="Позвоните мне"
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
                  value="Напишите мне в Whatsap"
                />
                <label htmlFor="write" className="form__label">
                  Написать в WhatsApp
                </label>
              </div>
            </div>
          </div>
          <div className="form__item">
            <input
              type="submit"
              onClick={(e) => formError(e)}
              id="submit"
              className="form__button"
            />
          </div>
          <div className="form__privacy">
            <p>
              Нажимая на кнопку, вы соглашаетесь с нашей{' '}
              <a href={require('../page/politic.pdf')} target="_blank" className="green__color">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
