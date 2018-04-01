import React from 'react';
import Nav from '../components/navigation';
import NavItem from '../components/navitem';
import NavLink from '../components/navlink';


const Home = () => (
  <div className="homepage">
    <h1>Homepage</h1>
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
export default Home;
