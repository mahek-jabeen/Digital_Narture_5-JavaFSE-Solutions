import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'app-container' },
      React.createElement('h1', null, 'Student Management Portal'),
      React.createElement(Home, null),
      React.createElement(About, null),
      React.createElement(Contact, null)
    );
  }
}

export default App;
