import React from 'react';

const ScoreBelow70 = () => {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  const filteredPlayers = players.filter(player => player.score <= 70);

  return (
    <section>
      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{`Mr. ${player.name} ${player.score}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default ScoreBelow70;
