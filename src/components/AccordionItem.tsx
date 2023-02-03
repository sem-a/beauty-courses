import React, { useEffect } from 'react';
import { headerColor, openAccordion, openTheory } from '../ts/script';

export default function AccordionItem() {
  
  
  useEffect(() => {
    openAccordion();
    headerColor();
    openTheory();
  });

  return (
    <div className='accordion'>
      <div className="accordion__btn">
        <p className='btn__acc'>Подробнее</p>
      </div>
      <div className="theory__items one">
        <div className="theory__item">
          <div className="name__theory">
            <p>Основы и безопасность</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Безопасность мастера и клиента</p>
            </div>
            <div className="theory__content-item">
              <p>Дезинфекция и стерилизация по нормам СаНПиН</p>
            </div>
            <div className="theory__content-item">
              <p>Организация и эргономика рабочего места мастера и клиента</p>
            </div>
            <div className="theory__content-item">
              <p>
                Стартовый набор мастера маникюра. Перечень самого необходимого: материалы, инструменты
                и оборудование
              </p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Строение и физиология ногтей</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Строение ногтевого ложа</p>
            </div>
            <div className="theory__content-item">
              <p>Болезни ногтей</p>
            </div>
            <div className="theory__content-item">
              <p>Как работать правильно и безопасно при болезнях ногтей</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Постановки руки</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Постановки руки на упор</p>
            </div>
            <div className="theory__content-item">
              <p>Правильных захват пальцев</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Правильный и безопасный опил формы</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Как правильно и безопасно опилить форму ногтевой пластины</p>
            </div>
            <div className="theory__content-item">
              <p>Разный формы опила: овал, квадрат, миндаль</p>
            </div>
            <div className="theory__content-item">
              <p>Работа с разными длинами: короткие, средние и длинные ногти</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Снятие искусственного покрытия</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Безопасность и комфорт во время снятия</p>
            </div>
            <div className="theory__content-item">
              <p>Виды снятия покрытия</p>
            </div>
            <div className="theory__content-item">
              <p>Схема снятия покрытия</p>
            </div>
            <div className="theory__content-item">
              <p>Нажим во время работы</p>
            </div>
            <div className="theory__content-item">
              <p>Разбор ошибок</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Аппаратный и комбинированный маникюр</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Особенности аппаратного и комбинированного маникюра</p>
            </div>
            <div className="theory__content-item">
              <p>Правила подбора техники маникюра и инструментов для выполнения маникюра</p>
            </div>
            <div className="theory__content-item">
              <p>Безопасность во время выполнения маникюра</p>
            </div>
            <div className="theory__content-item">
              <p>Техника выполнения маникюра</p>
            </div>
            <div className="theory__content-item">
              <p>Алгоритм работы</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Подготовка ногтевой пластины перед покрытием</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Для чего и в каких случаях использовать: обезжириватель, дегидратор, праймер</p>
            </div>
            <div className="theory__content-item">
              <p>
                Правильная подготовка ногтевой пластины к нанесению базы, акригеля, геля, полигеля
              </p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Материаловедение и работа с материалами</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>
                Правила работы с разными материалами: Работа с разными видами баз и топов, цветным
                покрытием
              </p>
            </div>
            <div className="theory__content-item">
              <p>Подбор материалов под разные ногтевые пластины</p>
            </div>
            <div className="theory__content-item">
              <p>Как добиться длительной носки покрытия</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Отслойки и их причины</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Из-за чего появляются отслойки, как предотвращать их появления</p>
            </div>
            <div className="theory__content-item">
              <p>Правила безопасной работы с ногтевой пластины с отслойками</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Виды укрепления и ремонта</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Ремонт и достроение ногтевой пластины</p>
            </div>
            <div className="theory__content-item">
              <p>Работа с трещинами, сколами, отслойками и истонченной ногтевой пластиной</p>
            </div>
            <div className="theory__content-item">
              <p>
                Изучение, специфика и правила подбора материалов: полигель, акригель, акриловая пудра,
                стекловолокно
              </p>
            </div>
            <div className="theory__content-item">
              <p>
                Способы и виды донаращивания на: верхние формы, нижние формы, стекловолокно, гелиевые
                типсы
              </p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Покрытие. Выстраивание архитектуры искусственного покрытия</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Разбор видов базовых покрытий: какие базы бывают, когда какую использовать</p>
            </div>
            <div className="theory__content-item">
              <p>В чем отличия укрепления и выравнивания</p>
            </div>
            <div className="theory__content-item">
              <p>Техники выравнивания</p>
            </div>
            <div className="theory__content-item">
              <p>
                Особенности работы с разными ногтевыми пластинами: ровные, траплиновидные, клюющие
                ногти
              </p>
            </div>
            <div className="theory__content-item">
              <p>
                Актуальные техники покрытия встык и под кутикулу. Секреты покрытия, для ускорения во
                время работы
              </p>
            </div>
            <div className="theory__content-item">
              <p>Разбор ошибок</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Покрытие топом</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Разбор топов: какие бывают, когда какой использовать. Работа топами с эффектами</p>
            </div>
            <div className="theory__content-item">
              <p>Способ нанесения</p>
            </div>
            <div className="theory__content-item">
              <p>Как избежать затеков во время работы</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>
              Анализ и исправление ошибок во время отработки, предотвращение этих ошибок при
              дальнейшей работе
            </p>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Востребованные дизайны</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Френч</p>
            </div>
            <div className="theory__content-item">
              <p>Растяжка</p>
            </div>
            <div className="theory__content-item">
              <p>Градиент</p>
            </div>
            <div className="theory__content-item">
              <p>Фольга</p>
            </div>
            <div className="theory__content-item">
              <p>Стразы</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Фото</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>
                Как поставить руку клиента, выставить свет, найти ракурс для продающего фото и видео
              </p>
            </div>
            <div className="theory__content-item">
              <p>Как с одного маникюра сделать 7 продающих фото и видео</p>
            </div>
          </div>
        </div>
        <div className="theory__item">
          <div className="name__theory">
            <p>Бонусы</p>
            <div className="arrow theory__arrow"></div>
          </div>
          <div className="theory__content">
            <div className="theory__content-item">
              <p>Психология работы с клиентом</p>
            </div>
            <div className="theory__content-item">
              <p>Как писать продающие посты и какие фото выставлять для привлечения новых клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
