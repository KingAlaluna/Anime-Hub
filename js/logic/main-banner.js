import {e, s, useNavigate} from '../data/initial-state.js';
import {Btn7, Btn1, Btn8} from '../layout/btns.js';


export function MainBanner() {
  return e(
    'div',
    {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '4rem',
        backgroundImage: 'var(--gradient-16), linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-17)',
        boxShadow: '0 0 2.5vh 2.5vh var(--color-1)',
        zIndex: '1',
        padding: '0 1rem',
        gap: '2rem',
      },
      className: 't-border-1',
    },
    e(LogoPanel),
    e(BtnPanel),
  );
}

function LogoPanel() {
  return e(
    'div',
    {
      style: {
        flexDirection: 'row',
        width: 'max-content',
        gap: '0.5rem',
        flex: '0 1 auto',
      },
    },
    e(LogoImg),
    e(LogoText),
  );
}

function BtnPanel() {
  const g = s();
  const nav = useNavigate();
  
  return e(
    'div',
    {
      style: {
        flexDirection: 'row',
        width: 'max-content',
        gap: '1rem',
      },
    },
    e(Btn7, {className: 'fa-magnifying-glass', onClick: () => g.setIsInputSearshAc(!g.isInputSearshAc), bg: g.isInputSearshAc ? 'var(--gradient-9)' : 'var(--gradient-5)' }),
    e(ThemeBtn, {}),
    
    e(Btn1, {className: 'fa-home', className2: 'button1', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/');
    }}),
    e(Btn1, {className: 'fa-sliders-h', className2: 'button1', noNewFav: true, onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Filter');
    }}),
    e(Btn8, {className: 'fa-heart', className2: 'button1', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Favourite');
    }}),
  );
}

function LogoImg() {
  return e(
    'div',
    {
      style: {
        borderRadius: '10px',
        backgroundImage: 'url(img/my-logo/logo.svg), var(--gradient-6)',
      },
      className: 't-btn-1'
    },
    
  );
}

function LogoText() {
  return e(
    'h1',
    {
      style: {
        fontWeight: '900',
        fontFamily: 'Montserrat, sans-serif',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        flex: '0 1 auto',
        //minWidth: '0',
      },
      className: 't-title-1',
    },
    'AnimeHub',
  );
}


function ThemeBtn() {
  const g = s();
  return e(
    'button',
    {
      style: {
        backgroundImage: 'var(--gradient-11), var(--gradient-10)',
      },
      onClick: () => {
        g.setIsDarkTheme(!g.isDarkTheme);
        localStorage.setItem('AnimeHubDarkTheme', !g.isDarkTheme);
      },
      className: 't-title-2 t-btn-1 fa-solid ' + (g.isDarkTheme == false ? ' fa-sun' : ' fa-moon'),
    },
    
  );
}
//115