import React from 'react';
import { useStore } from '../../context/game-context';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChangelogWindow } from '../../routes/changelog';
import { BattleWindow } from '../../routes/battle';
import { CraftingWindow } from '../../routes/crafting';
import { GatheringWindow } from '../../routes/gathering';

// import './index.css';

// @ts-ignore
export const GameWindow = ({}) => {
  return (
    <div
      className='panel'
      style={{
        position: 'relative',
        width: 500,
        height: 'auto',
        zIndex: 2,
      }}
    >
      <div className='body'>
        <div className='header'>
          <div className='view'>
            <b style={{ fontSize: 18 }}>Game Window &mdash; Current Tab Name</b>
          </div>
        </div>

        <div className='divider'></div>

        <div
          className='bar'
          style={{
            minHeight: 300,
          }}
        >
          <Routes>
            <Route path='/' element={<ChangelogWindow />} />
            <Route path='/battle' element={<BattleWindow />} />
            <Route path='/crafting' element={<CraftingWindow />} />
            <Route path='/gathering' element={<GatheringWindow />} />
          </Routes>
        </div>

        <div className='divider'></div>

        <div className='footer'>
          <div className='footer-in'></div>
          <div className='footer-link'>
            <b>Last Save</b>: 5 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
};
