import React, { Component } from 'react';

class About extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'component-card' },
      React.createElement('h2', null, 'About Component'),
      React.createElement('p', null, 'Welcome to the About Page of the Student Management Portal')
    );
  }
}

export default About;
