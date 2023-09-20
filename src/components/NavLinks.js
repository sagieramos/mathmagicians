import React from 'react';
import NavMenuItem from './NavMenuItem';
import './NavLinks.scss';

const NavLinks = () => (
  <nav id="NavLinks">
    <h1>Math Magicians</h1>
    <ul>
      <NavMenuItem to="/">Home</NavMenuItem>
      <NavMenuItem to="/calculator">Calculator</NavMenuItem>
      <NavMenuItem to="/quote">Quote</NavMenuItem>
    </ul>
  </nav>
);

export default NavLinks;
