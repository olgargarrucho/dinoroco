import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Div from './Div';
import Footer from './Footer';
import icon from '../images/icon.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import AboutMore from './AboutMore';
import Contact from './Contact';

function App() {

  return (
  <div className='page'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<>
            <Hero />
            <div className='div'>
              <Div photo={icon} photoName="Icon" title="Title One"  />
              <Div photo={icon2} photoName="Icon2" title="Title Two"  />
              <Div photo={icon3} photoName="Icon3" title="Title Three"  />
            </div>
          </>} />
          <Route path='/aboutus' element={<AboutMore />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> 
      </main>
      <Footer />
      
    
  </div>);
}

export default App;
