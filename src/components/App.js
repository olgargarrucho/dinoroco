import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Div from './Div';
import Footer from './Footer';
import icon from '../images/icon.jpg';
import icon2 from '../images/icon2.jpg';
import icon3 from '../images/icon3.jpg';
import AboutMore from './AboutMore';
import Contact from './Contact';
import Section from './Section';

function App() {

  return (
  <Routes>
          <Route path='/' element={<div className='page'>
            <Header />
            <main className='main'>
            <Hero />
            </main>
            <Footer />
          </div>} />
          <Route path='/aboutus' element={<div className='section-home'>
          
            <Header />
            <main className='main'>
            <AboutMore />
            </main>
            <Footer />
            </div>} />
          <Route path='/contact' element={<div className='section-home'>
            <Header />
            <main className='main'>
            <Contact />
            </main>
            <Footer />
            </div>} />
  </Routes>);
}

export default App;
