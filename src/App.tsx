import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { GameWindow } from './components/game-window';
import { Navigation } from './components/navigation';
import { Jobs } from './components/job-list';
import { Currencies } from './components/currency-list';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='background-image'></div>

      <div className='container'>
        <div className='game-container'>
          <BrowserRouter>
            <div className='left-sidebar-container'>
              <Navigation />
              <Jobs />
            </div>
            <GameWindow />
            <Currencies />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
