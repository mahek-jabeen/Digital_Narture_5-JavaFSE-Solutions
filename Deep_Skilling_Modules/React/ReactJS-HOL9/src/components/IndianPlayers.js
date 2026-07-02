import React from 'react';

const IndianPlayers = () => {
  const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  return (
    <section>
      <h1>Odd Players</h1>
      <ul>
        <li>{`First : ${first}1`}</li>
        <li>{`Third : ${third}3`}</li>
        <li>{`Fifth : ${fifth}5`}</li>
      </ul>
      <h1>Even Players</h1>
      <ul>
        <li>{`Second : ${second}2`}</li>
        <li>{`Fourth : ${fourth}4`}</li>
        <li>{`Sixth : ${sixth}6`}</li>
      </ul>
    </section>
  );
};

export default IndianPlayers;
