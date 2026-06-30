import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const score = ((props.total / props.goal) * 100).toFixed(2) + '%';

  return React.createElement(
    'div',
    { className: 'score-card' },
    React.createElement('h2', { className: 'heading' }, 'Student Details:'),
    React.createElement('p', null, React.createElement('span', { className: 'label' }, 'Name: '), React.createElement('span', { className: 'value name' }, props.Name)),
    React.createElement('p', null, React.createElement('span', { className: 'label' }, 'School: '), React.createElement('span', { className: 'value school' }, props.School)),
    React.createElement('p', null, React.createElement('span', { className: 'label' }, 'Total: '), React.createElement('span', { className: 'value total' }, props.total, ' Marks')),
    React.createElement('p', null, React.createElement('span', { className: 'label' }, 'Score: '), React.createElement('span', { className: 'value score' }, score))
  );
}

export default CalculateScore;
