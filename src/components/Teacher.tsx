import React from 'react';

export default function Teacher() {
  return (
    <div className="block__teacher">
      <div className="wrapper">
        <div className="teacher__flex">
          <div className="teacher__item">
            <div className="teacher__title">
              <h2 className="title">Преподаватель</h2>
            </div>
            <div className="teacher__name">
              <h3 className="title">Екатерина</h3>
            </div>
            <div className="teacher__post">
              <p>
                действующий руководитель ногтевого направления и топ-мастер в студии красоты «Хочу
                Красиво».
              </p>
            </div>
            <div className="teacher__info">
              <p>
                У нашего мастера 7 лет практического опыта работы. Сейчас Екатерина успешно передаёт
                свои знания начинающим мастерам, помогает адаптироваться и совершенствовать свои
                знания. Она прошла путь от мастера, который ничего не умел до профессионала, к
                которому выстраивается очередь из клиентов. Работа мастером помогает ей всегда быть
                в тренде и чувствовать новые веяния в сфере красоты
              </p>
            </div>
            <div className="teacher__button">
              <a href="#main" className="button">
                Записаться
              </a>
            </div>
          </div>
          <div className="teacher__item">
            <div className="theory-and-teacher-photo">
              <img src={require('../img/photo-teacher-m.png')} alt="theacher" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
