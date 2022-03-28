import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { GameProvider } from './context/game-context';

import { GameWindow } from './components/game-window';
import { Navigation } from './components/navigation';
import { ActiveJob } from './components/active-job';
import { Currencies } from './components/currency-list';

import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <div className='App'>
        <div className='background-image'></div>

        <div className='container'>
          <div className='game-container'>
            <BrowserRouter>
              <div className='left-sidebar-container'>
                <Navigation />
                <ActiveJob />
              </div>

              <GameWindow />
              <Currencies />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </GameProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
