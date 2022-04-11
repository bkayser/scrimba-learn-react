import React from 'react';
import './App.css';
import Play from './components/Play'

function App() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="App">
      {playing ?
        <Play />
        :
        <div className="welcome">
          <h1>Welcome!</h1>
          <p>Ready to Play?</p>
          <button onClick={ setPlaying(true) }>Go</button>
        </div>
      }
      <div id="bottom-bg"/>
    </div>
  );
}

export default App;
