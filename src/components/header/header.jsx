import React from 'react';
import SocialMedia from '../social/social';
import Logo from '../logo/logo';
import Nav from '../navigation/navigation';
import NavItem from '../navigation/navitem';
import NavigationLink from '../navigation/navigationLink';
import './header.css';

const Header = () => {
  const headerClass = 'nav nav__header';
  return (
    <div className="header">
      <SocialMedia />
      <Logo />
      <Nav cssClass={headerClass}>
        <NavItem>
          <NavigationLink link="/" exact="exact">Home</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink link="/about-us">About Us</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink link="/classes">Classes</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink link="/media">Media</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink link="/contact">Contact</NavigationLink>
        </NavItem>
      </Nav>
    </div>
  );
};


export default Header;
