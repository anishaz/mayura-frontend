import React from 'react';
import PropTypes from 'prop-types';

const NavItem = props => (
  <li>{props.children}</li>
);

NavItem.propTypes = {
  children: PropTypes.array.isRequired // eslint-disable-line
};


export default NavItem;
