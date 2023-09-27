import React, { useEffect } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import Prices from './Components/Prices/Prices';
import Customers from './Components/Customers/Customers';
import Company from './Components/Company/Company';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='all'>
      
      <Navbar />
      <Home />
      <Features />
      <Prices />
      <Customers />
      <Company />
      <Footer />

    </div>
  );
}

export default App;
