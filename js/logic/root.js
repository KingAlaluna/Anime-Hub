import {e, Outlet} from '../data/initial-state.js';
import {InputSearch} from './pages/anime-search.js';


export function Root() {
  return e(
    'div',
    {
      style: {
        height: 'auto',
        flex: '1',
        overflow: 'auto',
        backgroundColor: 'var(--color-fff)',
      },
    },
    e(InputSearch),
    e(Outlet),
  );
}
//15
