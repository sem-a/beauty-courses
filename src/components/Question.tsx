import React, { useEffect } from 'react';
import { openQuestion } from '../ts/script';

export default function Question() {
  useEffect(() => {
    openQuestion();
  });

  return (
    <div className="block__question">
      <div className="wrapper">
        <div className="question__title">
          <h2 className="title">
            Вопросы, которые <span className="green__color">стоит</span> задать
          </h2>
        </div>

        <div className="question__items">
          <div className="question__item">
            <div className="question__flex">
              <div className="question__item-title">
                <p>Есть ли рассрочка или оплата частями?</p>
              </div>
              <div className="question__plus-bg">
                <div className="question__plus-1"></div>
                <div className="question__plus-2"></div>
              </div>
            </div>
            <div className="question__content">
              <p>Да, мы предоставляем рассрочку от банка, она беспроцентная и удобна в оплате.</p>
            </div>
          </div>

          <div className="question__item">
            <div className="question__flex">
              <div className="question__item-title">
                <p>Возможно ли трудоустроиться после обучения у вас?</p>
              </div>
              <div className="question__plus-bg">
                <div className="question__plus-1"></div>
                <div className="question__plus-2"></div>
              </div>
            </div>
            <div className="question__content">
              <p>
                Да, бьюти рынок сейчас испытывает колоссальную нехватку мастеров по маникюру. Салоны
                и студии сейчас все больше и больше берут начинающих. Наш салон тоже заинтересован в
                начинающих мастерах, после обучения мы даём гарантию трудоустройства по вашему
                желанию.
              </p>
            </div>
          </div>

          <div className="question__item">
            <div className="question__flex">
              <div className="question__item-title">
                <p>Сколько будет отработок на обучение?</p>
              </div>
              <div className="question__plus-bg">
                <div className="question__plus-1"></div>
                <div className="question__plus-2"></div>
              </div>
            </div>
            <div className="question__content">
              <p>
                Будет 5 самостоятельных отработок во время обучения. А также после получения
                сертификата о прохождении обучения мы даём бонусом всем нашим ученицам пройти 7
                дневную стажировку на неограниченном количестве моделей под наблюдением наставников
                бесплатно.
              </p>
            </div>
          </div>

          <div className="question__item">
            <div className="question__flex">
              <div className="question__item-title">
                <p>Что нужно, чтобы начать обучение?</p>
              </div>
              <div className="question__plus-bg">
                <div className="question__plus-1"></div>
                <div className="question__plus-2"></div>
              </div>
            </div>
            <div className="question__content">
              <p>
                Все что Вам нужно - это прийти на обучение, инструменты мы дадим, моделей найдём.
              </p>
            </div>
          </div>

          <div className="question__item">
            <div className="question__flex">
              <div className="question__item-title">
                <p>Через сколько я смогу работать с клиентами?</p>
              </div>
              <div className="question__plus-bg">
                <div className="question__plus-1"></div>
                <div className="question__plus-2"></div>
              </div>
            </div>
            <div className="question__content">
              <p>
                Все зависит от вас. Если вы сразу после обучения будете брать моделей и отрабатывать
                навыки, то через неделю вы будете готовы работать с клиентами по хорошему прайсу.
                Все выбирают разные пути развития, на обучении мы расскажем что лучше для себя
                выбрать и стать востребованным мастером.
              </p>
            </div>
          </div>
        </div>
        <div className="zapis__button">
          <a href="#main" className="button">Записаться</a>
        </div>
      </div>

    </div>
  );
}
