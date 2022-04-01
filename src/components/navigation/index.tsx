import { Link } from 'react-router-dom';

import { useDispatch } from '../../context/game-context';
import { ChangeActivePage } from '../../actions/actions';

import { GAME_PAGES } from '../../constants/game-pages';

import './index.css';

// @ts-ignore
const NavigationEntry = ({ page }) => {
  if (!page.unlocked) {
    return <></>;
  }

  const dispatch = useDispatch();

  return (
    <div className='panel' style={{ minWidth: 218, width: '2em' }}>
      <div className='body'>
        <div className='bar'>
          <Link
            to={page.link}
            onClick={() => dispatch(ChangeActivePage(page.id))}
          >
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
