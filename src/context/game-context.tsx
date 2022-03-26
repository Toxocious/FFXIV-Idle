import { useState, useReducer, useEffect } from 'react';
import { storeReducer } from '../reducers/reducers';
import { getInitialStore, saveStore } from '../store/store';
import { gameTick } from '../actions/game-tick';
import { createContainer } from 'react-tracked';

const useValue = () => useReducer(storeReducer, getInitialStore());
const { Provider, useTrackedState, useUpdate } = createContainer(useValue);

export { useTrackedState as useStore, useUpdate as useDispatch };

// @ts-ignore
export const GameProvider = ({ children }) => {
  const StoreManager = () => {
    const store = useTrackedState();
    const dispatch = useUpdate();

    /**
     * Save the store whenever it changes.
     */
    useEffect(() => {
      saveStore(store);
    }, [store]);

    /**
     * Set up the game loop.
     */
    const [time, setTime] = useState(Date.now());
    useEffect(() => {
      const gameInterval = window.setInterval(() => {
        setTime(Date.now());
      }, 1000);

      return () => {
        window.clearInterval(gameInterval);
      };
    }, []);

    /**
     * Handle game tick events.
     */
    useEffect(() => {
      const tickDelta = (1000 - (Date.now() - time)) / 1000;

      gameTick({ store, dispatch }, tickDelta);
    }, [time]);

    return null;
  };

  return (
    <Provider>
      <StoreManager />

      {children}
    </Provider>
  );
};
