import React from "react";

export default function InfoCourses () {

  return(
    <div className="block__info-courses">
      <div className="wrapper">
        <div className="info-courses__flex">
          <div className="info-courses__item">
            <div className="info-courses__title">
              <h5 className="title">Старт</h5>
            </div>
            <div className="info-courses__text">
              <p>18 февраля</p>
            </div>
          </div>
          <div className="info-courses__item">
            <div className="info-courses__title">
              <h5 className="title">Формат</h5>
            </div>
            <div className="info-courses__text">
              <p>индивидуальное обучение или в мини-группе</p>
            </div>
          </div>
          <div className="info-courses__item">
            <div className="info-courses__title">
              <h5 className="title">Продолжительность</h5>
            </div>
            <div className="info-courses__text">
              <p>30 академических часов + 7-ми дневная дополнительная отработка на любом количестве моделей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};