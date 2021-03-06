import { Link } from 'react-router-dom';

import { useDispatch } from '../../providers/game';
import { ChangeActivePage } from '../../actions/actions';

import { GAME_PAGES } from '../../constants/game-pages';

import { NavEntryInterface } from '../../types/navigation';

import './navigation.css';

const NavigationEntry = (props: NavEntryInterface) => {
  const { page } = props;
  const GAME_PAGE = GAME_PAGES[page];

  if (!GAME_PAGE.unlocked) {
    return <></>;
  }

  const dispatch = useDispatch();

  return (
    <div className='panel' style={{ minWidth: 218, width: '2em' }}>
      <div className='body'>
        <div className='bar'>
          <Link
            to={GAME_PAGE.link}
            onClick={() => dispatch(ChangeActivePage(GAME_PAGE.id))}
          >
            <b>{GAME_PAGE.name}</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className='navigation-container'>
      {Object.keys(GAME_PAGES)
        // @ts-ignore
        .filter((page) => GAME_PAGES[page].display === true)
        .map((page) => (
          <NavigationEntry key={page} page={page} />
        ))}
    </div>
  );
};
