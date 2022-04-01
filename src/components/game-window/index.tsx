import { Routes, Route, Link } from 'react-router-dom';

import { GetActiveJob } from '../../utils/get-active-job';

import { JobSelector } from '../../components/job-selector';

import { ChangelogWindow } from '../../routes/changelog';
import { StatsWindow } from '../../routes/stats';
import { BattleWindow } from '../../routes/battle';
import { CraftingWindow } from '../../routes/crafting';
import { GatheringWindow } from '../../routes/gathering';

export const GameWindow = ({}) => {
  const ActiveJob = GetActiveJob();

  let WhatToRender: any;
  if (typeof ActiveJob === 'undefined') {
    WhatToRender = <JobSelector />;
  } else {
    WhatToRender = (
      <Routes>
        <Route path='/' element={<ChangelogWindow />} />
        <Route path='/stats' element={<StatsWindow />} />
        <Route path='/battle' element={<BattleWindow />} />
        <Route path='/crafting' element={<CraftingWindow />} />
        <Route path='/gathering' element={<GatheringWindow />} />
      </Routes>
    );
  }

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
            <b style={{ fontSize: 18 }}>FFXIV &mdash; Incremental</b>
          </div>
        </div>

        <div className='divider'></div>

        <div
          className='bar'
          style={{
            minHeight: 300,
          }}
        >
          {WhatToRender}
        </div>

        <div className='divider'></div>

        <div className='footer'>
          <div className='footer-in'>
            <Link to='/stats'>
              <b>Stats</b>
            </Link>
            <Link to='/'>
              <b>Changelog</b>
            </Link>
          </div>
          <div className='footer-link'>
            <b>Last Save</b>: 5 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
};
