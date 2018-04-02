import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => (
  <ul className={props.cssClass}>
    {props.children}
  </ul>
);


Nav.defaultProps = {
  cssClass: 'nav',
};

Nav.propTypes = {
  children: PropTypes.array.isRequired, // eslint-disable-line
  cssClass: PropTypes.string,
};

export default Nav;
