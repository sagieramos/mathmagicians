import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './Calculator';
import QuoteComponent from './QuoteComponent';
import NavLinks from './NavLinks';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <NavLinks />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteComponent />} />
      <Route path="*" element={<div>If page not found it goes here</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
