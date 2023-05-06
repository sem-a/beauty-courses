import React from 'react';
import './style/style.css';
import './style/null.css';
import Header from './components/Header';
import Form from './components/Form';
import Theory from './components/Theory';
import Teacher from './components/Teacher';
import Practice from './components/Practice';
import Footer from './components/Footer';
import InfoCourses from './components/InfoCourses';
import WorkStudent from './components/WorkStudents';
import Question from './components/Question';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main" id='main'>
        <div className="wrapper">
          <div className="block__main">
            <div className="main__flex">
              <div className="main__item">
                <div className="main__title">
                  <h1 className="title">Обучение маникюру от студии красоты Хочу Красиво!</h1>
                </div>
                <div className="main__upt">
                  <p className="upt__text">Передаем опыт от профессионалов</p>
                  <p className="upt__text">
                    Дополнительная 7 дневная отработка в студии под наблюдением наставников в
                    подарок
                  </p>
                </div>
              </div>
              <div className="main__item">
                <div className="main__form">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoCourses />
      <Teacher />
      <div className="block__theory">
        <div className="wrapper">
          <div className="theory__flex">
            <div className="theory__item">
              <div className="theory__padding">
                <div className="theory__title">
                  <h2 className="title">
                    Что Вы <span className="green__color">узнаете</span> на курсе?
                  </h2>
                </div>
                <div className="theory__ecs">
                  <p>
                    На обучение вы получите базовые навыки, которые станут хорошим фундаментом для
                    успешного начала работы мастером маникюра. После обучения вы сможете уверенно
                    работать с любыми ногтями. У вас будет четкое понимает что и как делать. В вашем
                    арсенале будут практические навыки подкреплённые теоретическим материалом.
                  </p>
                </div>
                <div className="block__price">
                  <div className="price__title">
                    <h4 className='title'>Стоимость курса: <span className='green__color'>22 000 руб.</span></h4>
                  </div>
                </div>
                <Theory />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Practice />
      <WorkStudent />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
