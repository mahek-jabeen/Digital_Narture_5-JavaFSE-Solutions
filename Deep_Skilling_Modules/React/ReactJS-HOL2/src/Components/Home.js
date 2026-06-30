import React, { Component } from 'react';

class Home extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'component-card' },
      React.createElement('h2', null, 'Home Component'),
      React.createElement('p', null, 'Welcome to the Home Page of Student Management Portal')
    );
  }
}

export default Home;
