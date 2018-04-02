import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = props => (
  <NavLink to={props.link} activeClassName="current">{props.children}</NavLink> // eslint-disable-line
);

NavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default NavigationLink;
