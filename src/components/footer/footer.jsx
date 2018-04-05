import React, { Component } from 'react';
import Nav from '../navigation/navigation';
import NavItem from '../navigation/navitem';
import NavigationLink from '../navigation/navigationLink';


class Footer extends Component {
  constructor() {
    super();
    this.updateKeys = this.updateKeys.bind(this);
    this.traverse = this.traverse.bind(this);
  }

  traverse(obj) {
    const objString = Object.prototype.toString;
    if (objString.call(obj) === '[object Array]') {
      for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].title);
        this.traverse(obj[i]);
      }
    } else {
      for (const key in obj) {
        if (objString.call(obj[key]) === '[object Array]') {
          this.traverse(obj[key]);
        }
      }
    }
  }

  updateKeys(api) {
    this.traverse(api);
  }

  render() {
    const footerClass = 'nav nav__footer';
    const { items } = this.props;
    this.updateKeys(items);
    return (
      <Nav cssClass={footerClass}>
        {Object
          .keys(items)
          .map(key => (
            <NavItem key={key}>
              <NavigationLink link={`/${items[key].object_slug}`}>{items[key].title}</NavigationLink>
            </NavItem>
          ))}
      </Nav>
    );
  }
}

export default Footer;
