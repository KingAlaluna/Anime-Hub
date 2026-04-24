import {e, s} from '../data/initial-state.js';
import {Text2} from './texts.js';
import {Btn7} from './btns.js';


export function Pagination1() {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'clamp(60px, 10vh, 100px)',
        padding: '0 20vw 0 20vw',
        margin: '2vmin',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    e(Btn7, {className: 'fa-arrow-left',
      onClick: () => {
        g.isPaginDocument >1 ? g.setIsPaginDocument(g.isPaginDocument - 1) : null;
      },
    }),
    e(Text2, {text: `${g.isPaginDocument} / ${g.isAllPaginDocument}`}),
    e(Btn7, {className: 'fa-arrow-right',
      onClick: () => {
        g.isPaginDocument < g.isAllPaginDocument ? g.setIsPaginDocument(g.isPaginDocument + 1) : null;
      },
    }),
  );
}
//26


