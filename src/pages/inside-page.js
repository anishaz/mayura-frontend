import React from 'react';
import PropTypes from 'prop-types';

// local
import Nav from '../components/navigation';
import NavItem from '../components/navitem';
import NavLink from '../components/navlink';


class InsidePage extends React.Component {
  render() {
    const location = this.props.location.pathname.substring(1).replace('-', ' ');
    return (
      <div className="about-us">
        <h1 className="page-title">{ location } </h1>
        <Nav>
          <NavItem>
            <NavLink link="/">Home</NavLink>
            <NavLink link="/about-us">About Us</NavLink>
            <NavLink link="/classes">Classes</NavLink>
            <NavLink link="/media">Media</NavLink>
            <NavLink link="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

InsidePage.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default InsidePage;
