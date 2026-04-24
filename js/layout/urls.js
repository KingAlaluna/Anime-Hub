import {e, } from '../data/initial-state.js';


export function Url1(props) {
  return e(
    'a',
    {
      style: {
        margin: '1vmin',
        padding: '1vmin',
        display: props.text !=='' && props.text !=='#' && props.text !=='★' && props.text !=='+' && props.text !==undefined && props.text !=='undefined+' ? 'block' : 'none',
        width: 'max-content',
        height: 'max-content',
        maxWidth: '95%',
        wordBreak: 'break-all',
        borderRadius: '10px',
        textDecoration: 'none',
        color: '#f30',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      href: props.href || '#',
      target: '_blank',
      rel: 'noopener, noreferrer',
      className: 't-border-6 ',
    },
    props.text || '',
  );
}

export function Url2(props) {
  return e(
    'a',
    {
      style: {
        margin: '1vmin 5%',
        padding: '1vmin',
        wordBreak: 'break-all',
        display: 'block',
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        background: props.bgColor || 'var(--color-fff)',
        
        textDecoration: 'none',
        color: '#f30',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      href: props.href || '#',
      target: '_blank',
      rel: 'noopener, noreferrer',
    },
    props.text,
  );
}
//55


