import React from 'react';
import PropTypes from 'prop-types';

const NavItem = props => (
  <li key={this.key}>{props.children}</li>
);

NavItem.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};


export default NavItem;
