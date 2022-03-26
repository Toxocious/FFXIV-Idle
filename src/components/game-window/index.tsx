import React from 'react';
import { useStore } from '../../context/game-context';

import './index.css';

// @ts-ignore
export const GameWindow = ({}) => {
  return (
    <div className='game-container'>
      <div className='panel'>
        <div className='body'>
          <div className='header'>
            <div className='view'>
              <b style={{ fontSize: 18 }}>
                Game Window &mdash; Current Tab Name
              </b>
            </div>
          </div>

          <div className='divider'></div>

          <div
            className='bar'
            style={{
              minHeight: 300,
            }}
          >
            &bull; Render current game tab content
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; &bull; Battle Window
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; &bull; Crafting Window
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; &bull; Gathering Window
            <br />
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
    </div>
  );
};
