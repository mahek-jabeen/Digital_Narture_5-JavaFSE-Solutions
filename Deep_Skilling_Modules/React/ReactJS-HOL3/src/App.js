import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return React.createElement(
    'div',
    { className: 'app-container' },
    React.createElement(CalculateScore, {
      Name: 'Steeve',
      School: 'DNV Public School',
      total: 284,
      goal: 3
    })
  );
}

export default App;
