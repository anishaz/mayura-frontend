import React from 'react';
import PropTypes from 'prop-types';

// local


class InsidePage extends React.Component {
  constructor() {
    super();
    this.pathNamePurify = this.pathNamePurify.bind(this);
  }

  pathNamePurify() {
    const location = this.props.location.pathname.substring(1).replace('-', ' ');
    return location;
  }


  render() {
    return (
      <div className="about-us">
        <h1 className="page-title">{ this.pathNamePurify() }</h1>
      </div>
    );
  }
}

InsidePage.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default InsidePage;
