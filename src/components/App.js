import React from 'react';
import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom'; // Import Link
import Calculator from './Calculator';
import QuoteComponent from './QuoteComponent';

const App = () => (
  <BrowserRouter>
    <nav>
      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      {/* Define the route for the Calculator component */}
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteComponent />} />
      {/* You can define other routes here if needed */}
    </Routes>
  </BrowserRouter>
);

export default App;
