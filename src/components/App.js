import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import AboutMore from './AboutMore';
import Contact from './Contact';

function App() {
  const [dataContact, setDataContact] = useState ({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInput = (name, value) => {
    setDataContact({
      ...dataContact,
      [name]: value,
    })
  }

  const handleResset = () => {
    setDataContact({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
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
            <Contact dataContact={dataContact} handleInput={handleInput} handleResset={handleResset} />
            </main>
            <Footer />
            </div>} />
  </Routes>);
}

export default App;
