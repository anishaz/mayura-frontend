import React from 'react';
import NavItem from './navitem';

const Nav = ({ props, children }) => (
  <ul className="navigation">
    <NavItem>{children}</NavItem>
  </ul>
);

export default Nav;
