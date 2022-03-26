import React from 'react';
import { GameWindow } from './components/game-window';
import { Jobs } from './components/job-list';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='background-image'></div>

      <div className='container'>
        <Jobs />
        <GameWindow />
      </div>
    </div>
  );
}
