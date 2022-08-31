import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';

function App() {

  return (
  <div>
      <Header />
      <Hero />

      
    
  </div>);
}

export default App;
