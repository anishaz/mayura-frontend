import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = props => (
  <Link to={props.link}>{props.children}</Link> // eslint-disable-line
);

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default NavLink;
