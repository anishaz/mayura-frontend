import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../navigation/navigation';
import NavItem from '../navigation/navitem';
import NavigationLink from '../navigation/navigationLink';


class Footer extends Component {
  render() {
    const footerClass = 'nav nav__footer';
    const footerSubNav = 'subnav subnav__footer';
    const { items } = this.props;

    return (
      <Nav cssClass={footerClass}>
        {Object
          .keys(items)
          .map(key => (
            <NavItem key={items[key].id}>
              <NavigationLink link={`/${items[key].object_slug}`}>{items[key].title}</NavigationLink>
              {/* if this particular nav item having children = true,
              go into the following code: */}
              {items[key].children &&
                <Nav cssClass={footerSubNav}>
                  {items[key].children.map(subNavItem => (
                    <NavItem key={subNavItem.id}>
                      <NavigationLink link={`/${subNavItem.object_slug}`}>{subNavItem.title}</NavigationLink>
                    </NavItem>
                  ))}
                </Nav>
              }
            </NavItem>
          ))}
      </Nav>
    );
  }
}


Footer.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};


export default Footer;
