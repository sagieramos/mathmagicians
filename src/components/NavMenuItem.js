import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenuItem = ({ to, children }) => (
  <li>
    <NavLink to={to} activeClassName="active">
      {children}
    </NavLink>
  </li>
);

NavMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavMenuItem;
