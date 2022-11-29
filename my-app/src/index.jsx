/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodgement from './pages/Lodgement/Lodgement';
import NotFound from './pages/notFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/lodgement' element={<Lodgement />} />
      <Route path='/notfound' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);


reportWebVitals();
