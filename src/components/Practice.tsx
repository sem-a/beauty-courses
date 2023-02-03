import React from 'react';

export default function Practice() {
  return (
    <div className="block__practice">
      <div className="wrapper">
        <div className="practice__title">
          <h2 className="title">
            <span className="green__color">Практика</span> - основа обучения!
          </h2>
        </div>
        <div className="practice__content">
          <div className="practice__item">
            <div className="practice__item-wrapper">
              <div className="practice__day">
                <h4 className="title">1 день</h4>
                <div className="practice__circle">
                <div className="circle__load c33">
                  <div className="load__text">33</div>
                </div>
              </div>
              </div>
              <div className="practice__info">
                <p>Теория</p>
                <p>Демонстрация преодователем маникюра, снятие и покрытия на модели</p>
                <p>
                  Отработка на типсах: безопасное снятие, опил формы, постановка руки для выполнения
                  маникюра, выравнивание и построение архитектуры, отработка простого дизайна
                </p>
              </div>
            </div>
          </div>
          <div className="practice__item">
            <div className="practice__item-wrapper">
              <div className="practice__day">
                <h4 className="title">2 день</h4>
                <div className="practice__circle">
                <div className="circle__load c66">
                  <div className="load__text">66</div>
                </div>
              </div>
              </div>
              <div className="practice__info">
                <p>Повтор теории</p>
                <p>
                  Самостоятельная отработка под наблюдением преподавателя комбинированного и
                  аппаратного маникюра на моделях + простой дизайн ( по желанию) 2 модели
                </p>
              </div>
            </div>
          </div>
          <div className="practice__item">
            <div className="practice__item-wrapper">
              <div className="practice__day">
                <h4 className="title">3 день</h4>
                <div className="practice__circle">
                <div className="circle__load c100">
                  <div className="load__text">100</div>
                </div>
              </div>
              </div>
              <div className="practice__info">
                <p>Повтор теории</p>
                <p>
                  Самостоятельная отработка комбинированного и аппаратного маникюра на моделях +
                  простой дизайн + донаращивание/ремонт + укрепление
                </p>
                <p>
                  Во время обучения <span className="green__color">можно и нужно</span> вести фото-
                  и видеосъёмку
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
