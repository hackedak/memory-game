import './App.css';
import React from 'react';

import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="layout-col App">


      <header className="App-header">Memory Game</header>

      <div className="content">
        <div className="Instruction">
          <h3>How to play</h3>
          <ul>
            <li>You will score when you match same tiles.</li>
            <li>For that you have to flip the tiles by clicking on it.</li>
            <li>Game will end when all tiles are matched.</li>
            <li>Try to match the tiles with least number of flips.</li>

          </ul>
        </div>
        <div className='fire dark'>
          <span class="Blazing" contenteditable="true">START</span>
        </div>
      </div>
    </div>
  );
}

export default App;
