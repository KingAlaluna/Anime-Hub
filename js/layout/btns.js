import {e, s, useState} from '../data/initial-state.js';
import {
  arrayGenres, 
  arrayTypes, 
  arrayYears, 
  arrayStudios, 
} from '../data/filter-anime.js';


export function Btn1(props) {
  const g = s();
  return e(
    'button',
    {
      style: {
        color: props.color || 'var(--color-000)',
        backgroundImage: props.bg ? (props.bg) : (g.isActBtn == props.className ? 'var(--gradient-9)' : 'var(--gradient-5)'),
      },
      onClick: () => {
        props.onClick?.() || null;
        g.setIsActBtn(props.className);
        g.setIsAnimeUrl('https://api.jikan.moe/v4/anime');
        if (!props.noNewFav) {
          arrayGenres.length = 0;
          arrayTypes.length = 0;
          arrayYears.length = 0;
          arrayStudios.length = 0;
        }
      },
      className: 't-btn-1 fa-solid ' + props.className + ' ' + (props.className2 ? props.className2 : '') || null,
    },
    props.svg || null,
  );
}

export function Btn2(props) {
  return e(
    'button',
    {
      style: {
        background: props.bg || 'var(--gradient-7)',
      },
      onClick: props.onClick || null,
      className: 't-btn-2 button-3',
    },
    props.text,
  );
}

function Btn3(props) {
  return e(
    'button',
    {
      style: {
        ...button3,
      },
      onClick: props.onClick || null,
      className: 'button-2',
    },
    props.text,
  );
}

export function Btn4(props) {
  return e(
    'button',
    {
      style: {
        backgroundImage: props.aniFavourite ? 'var(--gradient-15), var(--gradient-13)' : 'var(--gradient-14), var(--gradient-12)',
        fontSize: 'clamp(20px, 3vh, 30px)',
        height: 'clamp(30px, 5vh, 40px)',
        width: props.width || '90%',
      },
      onClick: () => {
        props.onClick?.() || null;
      },
      className: `t-title-2 t-btn-3 fa-solid fa-heart`,
    },
    
  );
}


export function Btn6(props) {
  const g = s();
  const [isActive, setIsActive] = useState(false);
  
  return e(
    'button',
    {
      style: {
        background: props.isAc ? (g[`is${props.isAc}`] == props.text && g[`is${props.isAc}2`] == true ? 'var(--gradient-8)' : 'var(--gradient-5)') : (isActive ? 'var(--gradient-8)' : 'var(--gradient-5)'),
        padding: 'clamp(5px, 1vmin, 10px)',
        minHeight: 'clamp(35px, 5vh, 50px)',
        height: 'auto',
        maxHeight: 'max-content',
      },
      onClick: () => {
        props.isAc ? (g[`setIs${props.isAc}`](props.text)) : (setIsActive(!isActive));
        props.isAc ? (g[`is${props.isAc}`] !== props.text && g[`is${props.isAc}2`] == true ? g[`setIs${props.isAc}2`](true) : g[`setIs${props.isAc}2`](!g[`is${props.isAc}2`])) : null;
        props.onClick?.() || null;
      },
      className: 't-btn-3 ',
    },
    props.text,
  );
}

export function Btn7(props) {
  return e(
    'button',
    {
      style: {
        color: props.color || 'var(--color-000)',
        backgroundImage: props.bg ? (props.bg) : ('var(--gradient-5)'),
      },
      onClick: () => {
        props.onClick?.() || null;
      },
      className: 't-btn-1 fa-solid ' + props.className || null,
    },
    props.svg || null,
  );
}

export function Btn8(props) {
  const g = s();
  return e(
    'button',
    {
      style: {
        backgroundImage: `${props.color ? props.color : 'var(--gradient-15)'}, ${props.bg ? (props.bg) : (g.isActBtn == props.className ? 'var(--gradient-9)' : 'var(--gradient-5)')}`,
      },
      onClick: () => {
        props.onClick?.() || null;
        g.setIsActBtn(props.className);
        g.setIsAnimeUrl('https://api.jikan.moe/v4/anime');
        if (!props.noNewFav) {
          arrayGenres.length = 0;
          arrayTypes.length = 0;
          arrayYears.length = 0;
          arrayStudios.length = 0;
        }
      },
      className: 't-btn-1 t-title-2 fa-solid ' + props.className + ' ' + (props.className2 ? props.className2 : '') || null,
    },
    props.svg || null,
  );
}
//147



