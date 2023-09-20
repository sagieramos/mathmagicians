import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './Calculator';
import QuoteComponent from './QuoteComponent';
import NavLinks from './NavLinks';
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <NavLinks />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteComponent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
