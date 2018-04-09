import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../social/social';
import Logo from '../logo/logo';
import Nav from '../navigation/navigation';
import NavItem from '../navigation/navitem';
import NavigationLink from '../navigation/navigationLink';
import './header.css';

class Header extends Component {
  render() {
    const headerClass = 'nav nav__header';
    const { items } = this.props;

    return (
      <header>
        <SocialMedia />
        <Logo />
        <Nav cssClass={headerClass}>
          <NavItem>
            <NavigationLink link="/" exact>Home</NavigationLink>
          </NavItem>
          {Object
            .keys(items)
            .map(key => (
              <NavItem key={items[key].id}>
                <NavigationLink link={`/${items[key].object_slug}`}>{items[key].title}</NavigationLink>
              </NavItem>))}
        </Nav>
      </header>
    );
  }
}


Header.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};


export default Header;
