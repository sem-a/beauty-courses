import React from 'react';
import AccordionItem from './AccordionItem';

export default function Theory() {

  return (
    <div>
      <div className="theory__subtitle">
        <h3 className="title">Теория</h3>
      </div>
      <div className="theory__flex">
      <AccordionItem />
      <div className="theory-and-teacher-photo">
        <img src={require('../img/photo-teacher.png')} alt="" />
      </div>
      </div>
    </div>
  );
}
