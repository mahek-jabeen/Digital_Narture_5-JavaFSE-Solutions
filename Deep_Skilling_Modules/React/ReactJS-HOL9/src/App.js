import './App.css';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import IndianPlayers from './components/IndianPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  let flag = true;

  if (flag === true) {
    return (
      <div className="App">
        <ListofPlayers />
        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div className="App">
        <IndianPlayers />
        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;
