import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = props => (
  <NavLink to={props.link} activeClassName="current" exact={props.exact}>{props.children}</NavLink>
);

NavigationLink.defaultProps = {
  exact: false,
};

NavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.string.isRequired,
};
export default NavigationLink;
