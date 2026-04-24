import {e, } from '../data/initial-state.js';


export function Text1(props) {
  return e(
    props.type || 'h2',
    {
      style: {
        margin: '3vmin',
      },
    },
    props.text,
  );
}

export function Text2(props) {
  return e(
    props.type || 'p',
    {
      style: {
        margin: '3vmin',
      },
    },
    props.text,
  );
}

export function Text3(props) {
  return e(
    props.type || 'h3',
    {
      style: {
        margin: '3vmin',
      },
    },
    props.text,
  );
}

export function Text4(props) {
  return e(
    props.type || 'div',
    {
      style: {
        margin: '1vmin',
        padding: '1vmin',
        display: props.text !=='' && props.text !=='#' && props.text !=='★' && props.text !=='+' && props.text !=='undefined' && props.text !=='undefined+' ? 'block' : 'none',
        width: 'max-content',
        height: 'max-content',
        maxWidth: '95%',
        wordBreak: 'break-all',
        borderRadius: '10px',
      },
      className: 't-border-6 ',
    },
    props.text,
  );
}

export function Text5(props) {
  return e(
    props.type || 'h3',
    {
      style: {
        margin: '1vmin 5%',
        wordBreak: 'break-all',
        display: 'block',
        height: 'max-content',
        width: '90%',
        fontFamily: 'Oswald, sans-serif',
      },
      className: 't-title-3 '
    },
    props.text,
  );
}

export function Text6(props) {
  return e(
    props.type || 'div',
    {
      style: {
        padding: '1vmin',
        display: props.text !=='' && props.text !=='#' && props.text !=='★' && props.text !=='+' && props.text !==undefined && props.text !=='undefined+' ? 'block' : 'none',
        width: 'max-content',
        height: 'max-content',
        borderRadius: props.brdRad || '0 0 10px 0',
        background: props.bgColor || '#f30',
        position: 'absolute',
        top: props.top || '0',
        left: props.left || '0',
        right: props.right || 'auto',
        bottom: props.bottom || 'auto',
        color: '#fff',
      },
      className: `fa-solid fa-solid-1 ${props.icon || ''} ${props.className || ''}`,
    },
    props.icon ? ` ${props.text}` : props.text,
  );
}

export function Text7(props) {
  return e(
    props.type || 'div',
    {
      style: {
        margin: '1vmin 5%',
        padding: '1vmin',
        wordBreak: 'break-all',
        display: 'block',
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        background: props.bgColor || 'var(--color-fff)'
      },
    },
    props.text,
  );
}
//116


