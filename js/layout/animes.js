import {e, } from '../data/initial-state.js';
import {Text6, Text5, Text4} from './texts.js';
import {Btn4} from './btns.js';



export function AnimeContainer1(props) {
  return e(
    'div',
    {
      style: {
        width: '45vmin',
        height: 'max-content',
        borderRadius: '10px',
        margin: '2.5vmin',
        backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
      },
      className: 't-border-4 anime-1',
    },
    e(Anime, {
      img: props.img || null,
      year: props.year || '',
      score: props.score || '',
      rank: props.rank || '',
      rating: props.rating || '',
      
      onClick: props.onClick || null,
    }),
    e(AnimeInfo, {
      title: props.title || '',
      studios: props.studios || '',
      episodes: props.episodes || '',
      duration: props.duration || '',
      status: props.status || '',
      genres: props.genres || '',
      
      onClickFav: props.onClickFav || null, 
      aniFavourite: props.aniFavourite || false, 
    }),
  );
}

//аніме рекомендації
export function AnimeContainer2(props) {
  return e(
    'div',
    {
      style: {
        width: '90%',
        height: 'max-content',
        borderRadius: '10px',
        margin: '2vmin',
        backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
      },
      className: 't-border-4 anime-1',
    },
    e(Anime, {
      img: props.img || null,
      year: props.year || '',
      score: props.score || '',
      rank: props.rank || '',
      rating: props.rating || '',
      
      onClick: props.onClick || null,
    }),
    e(AnimeInfo, {
      title: props.title || '',
      studios: props.studios || '',
      episodes: props.episodes || '',
      duration: props.duration || '',
      status: props.status || '',
      genres: props.genres || '',
      
      onClickFav: props.onClickFav || null, 
      aniFavourite: props.aniFavourite || false, 
    }),
  );
}

function Anime(props) {
  return e(
    'div',
    {
      style: {
        width: '100%',
        height: 'auto',
        aspectRatio: '5/7',
        backgroundImage: `url(${props.img || null})`,
      },
      onClick: props.onClick || null,
    },
    e(Text6, {text: props.year || '', bgColor: '#0af', }),
    e(Text6, {text: props.score || '', left: 'auto', right: '0', brdRad: '0 0 0 10px', bgColor: '#fa0', icon: 'fa-star', }),
    e(Text6, {text: props.rank || '', left: 'auto', right: '0', top: 'auto', bottom: '0', brdRad: '10px 0 0 0', bgColor: '#9900ff', icon: 'fa-ranking-star', }),
    e(Text6, {text: props.rating || '', top: 'auto', bottom: '0', brdRad: '0 10px 0 0'}),
  );
}

export function Anime2(props) {
  return e(
    'div',
    {
      style: {
        width: '70%',
        height: 'auto',
        aspectRatio: '5/7',
        borderRadius: '10px',
        margin: '5vmin',
        backgroundImage: `url(${props.img || null}), var(--gradient-18)`,
      },
      className: 't-border-4 ',
    },
  );
}

function AnimeInfo(props) {
  return e(
    'div',
    {
      style: {
        width: '100%',
        height: 'auto',
        minHeight: '10vh',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      },
    },
    e(Text5, {text: props.title || ''}),
    
    e(Text4, {text: props.type || ''}),
    e(Text4, {text: props.studios || ''}),
    e(Text4, {text: props.episodes || ''}),
    e(Text4, {text: props.duration || ''}),
    e(Text4, {text: props.status || ''}),
    e(Text4, {text: props.genres || ''}),
    
    e(Btn4, {onClick: props.onClickFav || null, aniFavourite: props.aniFavourite || false, }),
  );
}
//136



