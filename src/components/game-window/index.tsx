import { Routes, Route, Link } from 'react-router-dom';

import { useDispatch } from '../../context/game-context';
import { ChangeActivePage } from '../../actions/actions';

import { GetActiveJob } from '../../utils/get-active-job';

import { JobSelector } from '../../components/job-selector';

import { ChangelogWindow } from '../../routes/changelog';
import { ShopWindow } from '../../routes/shop';
import { StatsWindow } from '../../routes/stats';
import { BattleWindow } from '../../routes/battle';
import { CraftingWindow } from '../../routes/crafting';
import { GatheringWindow } from '../../routes/gathering';

export const GameWindow = ({}) => {
  const dispatch = useDispatch();
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
        <Route path='/shop' element={<ShopWindow />} />
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
            <Link to='/stats' onClick={() => dispatch(ChangeActivePage(4))}>
              <b>Stats</b>
            </Link>
            <Link to='/' onClick={() => dispatch(ChangeActivePage(5))}>
              <b>Changelog</b>
            </Link>
          </div>
          <div className='footer-link'>
            <b>Version</b>: 2022.1.4
          </div>
        </div>
      </div>
    </div>
  );
};
