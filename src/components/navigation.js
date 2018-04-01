import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => (
  <ul className="navigation">
    {props.children}
  </ul>
);

Nav.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Nav;
