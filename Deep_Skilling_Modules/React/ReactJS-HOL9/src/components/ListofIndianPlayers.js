import React from 'react';

const ListofIndianPlayers = () => {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <section>
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{`Mr. ${player}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListofIndianPlayers;
