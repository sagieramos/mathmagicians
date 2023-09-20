import React from 'react';
import NavMenuItem from './NavMenuItem';

const NavLinks = () => (
  <nav>
    <ul>
      <NavMenuItem to="/">Home</NavMenuItem>
      <NavMenuItem to="/calculator">Calculator</NavMenuItem>
      <NavMenuItem to="/quote">Quote</NavMenuItem>
    </ul>
  </nav>
);

export default NavLinks;
