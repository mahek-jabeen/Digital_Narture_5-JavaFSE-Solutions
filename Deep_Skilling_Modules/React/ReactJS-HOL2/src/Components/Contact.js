import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'component-card' },
      React.createElement('h2', null, 'Contact Component'),
      React.createElement('p', null, 'Welcome to the Contact Page of the Student Management Portal')
    );
  }
}

export default Contact;
