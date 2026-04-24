import {e, s, } from '../../data/initial-state.js';
import {Pagination1} from '../../layout/paginations.js';
import {PanelRecomeng1, } from '../../layout/anime-render-lists.js';
import {FooterCopy} from '../../layout/footer-copy.js';


export function Favourite() {
  const g = s();
  
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
      },
    },
    e(PanelRecomeng1, {text: 'Ваші улюбленні аніме:', animeFavourite: true, timer: 0}),
    e(Pagination1),
    e(FooterCopy),
  );
}
//17