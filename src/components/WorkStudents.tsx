import React, { useEffect } from 'react';
import { openWork } from '../ts/script';

export default function WorkStudent() {

  useEffect( () => {
    openWork();
  });

  return (
    <div className="block__work">
      <div className="wrapper">
      <div className="students__title">
          <h2 className="title">Работы учеников</h2>
        </div>
        <div className="work__content">
          <div className="work__img">
            <img src={require('../img/work-0.jpg')} alt="work" />
          </div>
          <div className="work__img">
            <img src={require('../img/work-1.jpg')} alt="work" />
          </div>
          <div className="work__img">
            <img src={require('../img/work-2.jpg')} alt="work" />
          </div>
        </div>
        <div className="work__button">
          <p className='btn__work'>Показать еще</p>
        </div>
        <div className='hide-content'>
          <div className="work__content raskrit">
            <div className="work__img">
              <img src={require('../img/work-3.jpg')} alt="work" />
            </div>
            <div className="work__img">
              <img src={require('../img/work-4.jpg')} alt="work" />
            </div>
            <div className="work__img">
              <img src={require('../img/work-5.jpg')} alt="work" />
            </div>{' '}
            <div className="work__img">
              <img src={require('../img/work-6.jpg')} alt="work" />
            </div>
            <div className="work__img">
              <img src={require('../img/work-7.jpg')} alt="work" />
            </div>
            <div className="work__img">
              <img src={require('../img/work-8.jpg')} alt="work" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
