import {e, s, useState, useNavigate, useEffect } from '../data/initial-state.js';
import {Text1} from './texts.js';
import {AnimeContainer1, AnimeContainer2} from './animes.js';


export function Panel1(props) {
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-2), var(--gradient-17)',
        height: 'max-content',
      },
      className: 't-border-2',
    },
    e(Text1, {text: props.text}),
    e(Panel2, {animeUrl: props.animeUrl, timer: props.timer || null}),
  );
}

function Panel2(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        overflow: 'auto',
        display: 'block',
      },
    },
    e(Panel3, {animeUrl: props.animeUrl, timer: props.timer || null}),
  );
}


//панель аніме топ та інші
function Panel3(props) {
  const g = s();
  const [animeList, setAnimeList] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://api.jikan.moe/v4/${props.animeUrl}`)
        .then(response => response.json())
        .then(data => {
          setAnimeList(data.data); 
        })
        .catch(err => console.error("Помилка завантаженя списка аніме топ та інші:", err));
    }, props.timer || 0);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!animeList) {
    return e(Text1, {text: 'Завантаження...'});
  }

  return e(
    'div',
    {
      style: {
        height: 'max-content',
        width: 'max-content',
        overflow: 'auto',
        gridTemplateColumns: 'repeat(25, 1fr)',
        alignItems: 'start',
      },
      className: 't-grid-1 ',
    },
    
    
    animeList?.map((anime, index) => {
      const alreadyFavorite = g.isAnimeFavourite.some(i => i.mal_id === anime.mal_id);
      
      return e(AnimeContainer1, { 
        key: `${anime.mal_id}-${index}`,
        img: anime.images.webp.image_url,
        
        year: anime.year,
        score: anime.score,
        rank: anime.rank,
        rating: anime.rating ? (anime.rating.match(/\d+/)?.[0] + '+') || '' : '',
        
        title: anime.title,
        type: anime.type,
        studios : anime.studios?.map(e => e.name).join(', ') || '',
        episodes: anime.episodes,
        duration: anime.duration,
        status: anime.status,
        genres: anime.genres?.map(e => e.name).join(', ') || '',
        
        aniFavourite: alreadyFavorite, 
        
        onClick: () => {
          nav(`/AnimeViewing/${anime?.mal_id}`);
        },
        
        onClickFav: () => {
          g.setIsAnimeFavourite(prev => {
            const alreadyFavorite = prev.some(i => i.mal_id === anime.mal_id);
            
            const newState = alreadyFavorite 
              ? prev.filter(it => it.mal_id !== anime.mal_id) 
              : [...prev, anime];
            
            localStorage.setItem('my_anime_favs', JSON.stringify(newState));
            return newState;
          });
        },
      });
    }),
  );
}





//аніме рекомендуємо
export function PanelRecomeng1(props) {
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-2), var(--gradient-17)',
        height: 'max-content',
      },
      className: 't-border-2',
    },
    e(Text1, {text: props.text}),
    e(PanelRecomeng2, {url: props.url || null, animeFavourite: props.animeFavourite || null, timer: props.timer || null}),
  );
}

//панель аніме рекомендую
function PanelRecomeng2(props) {
  const g = s();
  const nav = useNavigate();
  const [animeLists, setAnimeLists] = useState([]);
  
  const arrAnime = !props.animeFavourite ? animeLists : animeLists.slice((g.isPaginDocument - 1) * 25, g.isPaginDocument * 25);
  
  const baseUrl = props.url || g.isAnimeUrl;
  if (!baseUrl) return;
  const finalUrl = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${g.isPaginDocument}`;
  
  useEffect(() => {
    if (!props.animeFavourite) {
    const timer = setTimeout(() => {
      fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
          setAnimeLists(data.data || []); 
          g.setIsAllPaginDocument(data.pagination?.last_visible_page);
        })
        .catch(err => {
          console.error("Помилка API:", err);
          setAnimeLists([]);
        });
    }, props.timer || 2000);
    
    return () => clearTimeout(timer);
    } else {
      setAnimeLists(g.isAnimeFavourite);
      g.setIsAllPaginDocument(Math.ceil(((g.isAnimeFavourite?.length || 0) / 25)) < 1 ? 1 : Math.ceil(g.isAnimeFavourite?.length / 25));
    }
  }, [props.url, g.isAnimeFavourite, g.isPaginDocument]);
  
  if (!animeLists) {
    return e(Text1, {text: 'Завантаження...'});
  }
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        alignItems: 'start',
      },
      className: 't-grid-2 panel-recomeng-1',
    },
    
    
    arrAnime && arrAnime.length > 0 ? arrAnime.map((anime) => {
      const alreadyFavorite = g.isAnimeFavourite.some(i => i.mal_id === anime.mal_id);
      
      return e(AnimeContainer2, { 
        key: anime.mal_id,
        img: anime.images.webp.image_url,
        
        year: anime.year,
        score: anime.score,
        rank: anime.rank,
        rating: anime.rating ? (anime.rating.match(/\d+/)?.[0] + '+') || '' : '',
        
        title: anime.title,
        type: anime.type,
        studios : anime.studios?.map(e => e.name).join(', ') || '',
        episodes: anime.episodes,
        duration: anime.duration,
        status: anime.status,
        genres: anime.genres?.map(e => e.name).join(', ') || '',
        
        aniFavourite: alreadyFavorite, 
        
        onClick: () => {
          nav(`/AnimeViewing/${anime?.mal_id}`);
        },
        
        onClickFav: () => {
          g.setIsAnimeFavourite(prev => {
            const alreadyFavorite = prev.some(i => i.mal_id === anime.mal_id);
            
            const newState = alreadyFavorite 
              ? prev.filter(it => it.mal_id !== anime.mal_id) 
              : [...prev, anime];
            
            localStorage.setItem('my_anime_favs', JSON.stringify(newState));
            return newState;
          });
        },
      });
    }) : null,
  );
}
//224


