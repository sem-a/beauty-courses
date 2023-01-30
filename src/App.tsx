import React from 'react';
import './style/style.css';
import './style/null.css';
import Header from './components/Header';
import Form from './components/Form';
import Theory from './components/Theory';
import Teacher from './components/Teacher';
import Practice from './components/Practice';
import Students from './components/Students';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <div className="wrapper">
          <div className="block__main">
            <div className="main__flex">
              <div className="main__item">
                <div className="main__title">
                  <h1 className="title">
                    <span className="green__color">Хочу Красиво</span> открывает школу маникюра
                  </h1>
                </div>
                <div className="main__upt">
                  <p className="upt__text">
                    Получи <span className="green__color">востребованную</span> профессию и начни
                    зарабатывать сразу после обучения!
                  </p>
                  <p className="upt__text">
                    Дополнительная <span className="green__color">7 дневная отработка</span> в
                    студии под наблюдением наставников в подарок
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
      <div className="block__theory">
        <div className="wrapper">
          <div className="theory__title">
            <h2 className="title">
              Что Вы <span className="green__color">узнаете</span> на курсе?
            </h2>
          </div>
          <Theory />
        </div>
      </div>
      <Teacher />
      <Practice />
      <Students />
      <div className="block__contact">
        <div className="wrapper">
          <div className="contact__flex">
            <div className="contact__item">
              <div className="contact__text">
                <p>Вы можете связаться с нами в любом удобном мессенджере</p>
              </div>
              <div className="contact__messenger">
                <div className="contact-messenger-icon">
                  <a href="#">
                    <img src={require('./img/whatsapp-logo.png')} alt="whatsapp" />
                  </a>
                </div>
                <div className="contact-messenger-icon">
                  <a href="#">
                    <img src={require('./img/telegram-logo.png')} alt="telegram" />
                  </a>
                </div>
              </div>
              <div className="contact__phone">
                <p className='contact__title'>Позвонить</p>
                <p>+7 (911) 028-25-46</p>
              </div>
              <div className="contact__address">
                <p className='contact__title'>Наши адреса</p>
                <p>Московский просп., 73, корп. 5</p>
              </div>
            </div>
            <div className="contact__item">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
