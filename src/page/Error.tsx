import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Error () {

  return (
    <div className="formsubmit">
      <Header />
      <div className="modal">
        <div className="wrapper">
          <div className="submit__text">
            <p>Произошла ошибка, попробуйте позже!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}