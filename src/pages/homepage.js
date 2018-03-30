import React, { Component } from 'react';
import Nav from '../components/navigation';
import NavItem from '../components/navitem';

class Home extends Component {
    render() {
        return (
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>About Us</NavItem>
                <NavItem>Classes</NavItem>
                <NavItem>Media</NavItem>
                <NavItem>Contact</NavItem>
            </Nav>
        )
    }
}

export default Home;