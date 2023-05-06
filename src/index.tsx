import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './page/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<App />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);