import React from 'react';

import { GameWindow } from './components/game-window';
import { Jobs } from './components/job-list';
import { Currencies } from './components/currency-list';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='background-image'></div>

      <div className='container'>
        <div className='game-container'>
          <Jobs />
          <GameWindow />
          <Currencies />
        </div>
      </div>
    </div>
  );
}
