import React, { Component } from 'react';
import client from '../../client';

class Footer extends Component {
  componentWillMount() {
    // Replace with client('local')
    // for local dev setup
    const dataURL = client('local');
    const fetchForThisComponent = `${dataURL}wp-api-menus/v2/menus/3`;
    fetch(fetchForThisComponent)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          items: res.items,
        });
      });
  }
  render() {
    const state = this.state;
    console.log(`state here: ${state}`);
    return (
      <div>
        {/* {Object
        .keys(items)
        .map(key =>
          (<div key={key} className={`post post-${key}`}>
            <div className="post-title" />
          </div>))} */}
      </div>
    );
  }
}

export default Footer;
