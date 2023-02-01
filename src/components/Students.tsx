import React from 'react';
import Slider from 'react-slick';

function NextArrow(props: any) {
  const {style, onClick} = props;
  return (
    <div
      className='arrow arrow-next'
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const {onClick} = props;
  return (
    <div
      className='arrow arrow-prev'
      onClick={onClick}
    />
  );
}


export default function Students() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="block__students">
      <div className="wrapper">
        <div className="students__title">
          <h2 className="title">Наши ученики</h2>
        </div>
        <div className="students__carusel">
          <Slider {...settings} className="slider">
            <div className="slider__content">
              <div className="student__flex">
                <div className="student__img">
                  <img src={require('../img/photo-prim.PNG')} alt="photo-prim" />
                </div>
                <div className="student__item">
                  <div className="student__name">
                    <h5 className="title">Евгения Ермолаева</h5>
                  </div>
                  <div className="student__post">
                    <p>Мастер студии Хочу Красиво</p>
                  </div>
                  <div className="student__feedback">
                    <p>
                      Отличный салон, мастера просто класс. Еще радует что он совсем рядом с домом.
                      Советую всем этот салон. Главное что советуют какой будет маникюр лучше
                      смотреться.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider__content">
              <div className="student__flex">
                <div className="student__img">
                  <img src={require('../img/photo-prim.PNG')} alt="photo-prim" />
                </div>
                <div className="student__item">
                  <div className="student__name">
                    <h5 className="title">Евгения Ермолаева</h5>
                  </div>
                  <div className="student__post">
                    <p>Мастер студии Хочу Красиво</p>
                  </div>
                  <div className="student__feedback">
                    <p>
                      Отличный салон, мастера просто класс. Еще радует что он совсем рядом с домом.
                      Советую всем этот салон. Главное что советуют какой будет маникюр лучше
                      смотреться.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider__content">
              <div className="student__flex">
                <div className="student__img">
                  <img src={require('../img/photo-prim.PNG')} alt="photo-prim" />
                </div>
                <div className="student__item">
                  <div className="student__name">
                    <h5 className="title">Евгения Ермолаева</h5>
                  </div>
                  <div className="student__post">
                    <p>Мастер студии Хочу Красиво</p>
                  </div>
                  <div className="student__feedback">
                    <p>
                      Отличный салон, мастера просто класс. Еще радует что он совсем рядом с домом.
                      Советую всем этот салон. Главное что советуют какой будет маникюр лучше
                      смотреться.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider__content">
              <div className="student__flex">
                <div className="student__img">
                  <img src={require('../img/photo-prim.PNG')} alt="photo-prim" />
                </div>
                <div className="student__item">
                  <div className="student__name">
                    <h5 className="title">Евгения Ермолаева</h5>
                  </div>
                  <div className="student__post">
                    <p>Мастер студии Хочу Красиво</p>
                  </div>
                  <div className="student__feedback">
                    <p>
                      Отличный салон, мастера просто класс. Еще радует что он совсем рядом с домом.
                      Советую всем этот салон. Главное что советуют какой будет маникюр лучше
                      смотреться.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
