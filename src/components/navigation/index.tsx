import { Link } from 'react-router-dom';

import { GAME_PAGES } from '../../constants/game-pages';

import './index.css';

// @ts-ignore
const NavigationEntry = ({ page }) => {
  if (!page.unlocked) {
    return <></>;
  }

  return (
    <div className='panel' style={{ minWidth: 218, width: '2em' }}>
      <div className='body'>
        <div className='bar'>
          <Link to={page.link}>
            <b>{page.name}</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className='navigation-container'>
      {GAME_PAGES.map((page) => (
        <NavigationEntry key={page.id} page={page} />
      ))}
    </div>
  );
};
