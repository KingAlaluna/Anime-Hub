import {e, s, useNavigate} from '../data/initial-state.js';
import {Btn1, Btn8} from '../layout/btns.js';


export function BottomNav() {
  const g = s();
  const nav = useNavigate();
  
  return e(
    'div',
    {
      style: {
        height: '4rem',
        backdropFilter: 'blur(5px)',
        backgroundImage: 'var(--gradient-4)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '1rem',
        width: 'max-content',
        padding: '0 2rem',
        borderRadius: '2rem 2rem 0 0',
      },
      className: 't-position-1 panel-2',
    },
    e(Btn1, {className: 'fa-home', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/');
    }}),
    e(Btn1, {className: 'fa-sliders-h', noNewFav: true, onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Filter');
    }}),
    e(Btn8, {className: 'fa-heart', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Favourite');
    }}),
  );
}
//31