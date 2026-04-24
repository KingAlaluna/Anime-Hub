import {e, s, useNavigate, useParams, f, useState, useEffect, } from '../../data/initial-state.js';
import {FooterCopy} from '../../layout/footer-copy.js';
import {Text1, Text4, Text5, Text7} from '../../layout/texts.js';
import {Btn4} from '../../layout/btns.js';
import {Url1} from '../../layout/urls.js';
import {Anime2} from '../../layout/animes.js';


export function AnimeViewing() {
  const g = s();
  const {animeId} = useParams();
  
  f(() => {
    fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
      .then(response => response.json())
      .then(data => {
        g.setIsAnimeData(data.data);
      })
      .catch(err => console.error("Помилка завантаження аніме:", err));
  }, []);
  
  if (!g.isAnimeData) {
    return e(Text1, {text: 'Завантаження...'});
  }
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        minHeight: '100%',
        backgroundImage: 'var(--gradient-1)',
      },
    },
    e(AVGrid, {}),
    e(AVSynopsis),
    e(Text1, {text: 'Трейлери:'}),
    e(AVTrailer),
    e(Text1, {text: 'Персонажі (натисніть на персонажа для більш детальноі інформації):'}),
    e(Characters),
    e(FooterCopy),
  );
}


function AVGrid() {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        backgroundImage: 'var(--gradient-1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        justifyItems: 'center',
      },
      className: 'anime-viewing-grid-1',
    },
    e(AVimg),
    e(AVInfoGrid),
  );
}


function AVimg() {
  const g = s();
  const alreadyFavorite = g.isAnimeFavourite?.some(i => i?.mal_id === g.isAnimeData?.mal_id);
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
      },
    },
    e(Anime2, {img: g.isAnimeData?.images?.webp?.large_image_url || null}),
    e(Btn4, {width: '70%', aniFavourite: alreadyFavorite, 
      onClick: () => {
        g.setIsAnimeFavourite(prev => {
          const alreadyFavorite = prev?.some(i => i?.mal_id === g.isAnimeData?.mal_id);
          
          const newState = alreadyFavorite 
            ? prev?.filter(it => it?.mal_id !== g.isAnimeData?.mal_id) 
            : [...prev, g?.isAnimeData];
            
          localStorage.setItem('my_anime_favs', JSON.stringify(newState));
          return newState;
        });
      },
    }),
  )
}


//детальна інформація
function AVInfoGrid() {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        margin: '5vmin',
        alignItems: 'start',
      },
      className: 't-grid-2 t-border-9 ',
    },
    e(Text7, {text: `Назва: ${g.isAnimeData?.title || 'невідомо'}`,}),
    e(Text7, {text: `Оцінка: ${g.isAnimeData?.score || 'невідомо'}`,}),
    e(Text7, {text: `Місце в топі: ${g.isAnimeData?.rank || 'невідомо'}`,}),
    e(Text7, {text: `Рік: ${g.isAnimeData?.year || 'невідомо'}`, }),
    e(Text7, {text: `Віковий рейтинг: ${g.isAnimeData?.rating || 'невідомо'}`, }),
    e(Text7, {text: `Студія/ї: ${g.isAnimeData?.studios?.map(e => e.name).join(', ') || 'невідомо'}`, }),
    e(Text7, {text: `Кількість епізодів: ${g.isAnimeData?.episodes || 'невідомо'}`, }),
    e(Text7, {text: `Довжина епізода: ${g.isAnimeData?.duration || 'невідомо'}`, }),
    e(Text7, {text: `Статус вихода: ${g.isAnimeData?.status || 'невідомо'}`, }),
    e(Text7, {text: `Чи виходить тепер: ${g.isAnimeData?.airing ? 'так' : 'ні'}`, }),
    e(Text7, {text: `Жанри: ${g.isAnimeData?.genres?.map(e => e.name).join(', ') || 'невідомо'}`, }),
    e(Text7, {text: `Тематика: ${g.isAnimeData?.themes?.map(e => e.name).join(', ') || 'невідомо'}`, }),
    e(Text7, {text: `Тип: ${g.isAnimeData?.type || 'невідомо'}`, }),
    e(Text7, {text: `Первине джерело: ${g.isAnimeData?.source || 'невідомо'}`, }),
  );
}


//опис
function AVSynopsis() {
  return e(
    'details',
    {
      style: {
        borderRadius: '10px',
        width: '90%',
        margin: '5vmin',
      },
      className: 't-border-9 ',
    },
    e(AVSynopsisPanel),
    e(AVSynopsisText),
  );
}

function AVSynopsisPanel() {
  return e(
    'summary',
    {
      style: {
        padding: '5vmin',
      },
    },
    'Опис'
  );
}

function AVSynopsisText() {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
      },
    },
    g.isAnimeData?.synopsis || 'Нажаль, опис відсутній...',
  );
}


//трейлер
function AVTrailer() {
  const g = s();
  return e(
    'iframe',
    {
      style: {
        width: '90%',
        height: '70vmin',
        borderRadius: '10px',
        margin: '5vmin',
      },
      src: g.isAnimeData?.trailer?.embed_url || '',
      allow: `accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen`,
      title: 'Відео-плеєр трейлера',
      allowFullScreen: true,
    },
  );
}



//персонажі
//загальний контейнер
function Characters() {
  const g = s();
  const nav = useNavigate();
  const {animeId} = useParams();
  const [isCharacters, setIsCharacters] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`)
      .then(response => response.json())
      .then(data => {
        setIsCharacters(data.data); 
      })
      .catch(err => console.error("Помилка API:", err));
  }, []);
  
  //console.log(isCharacters);
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        margin: '5vmin',
        backgroundImage: 'var(--gradient-1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        alignItems: 'start',
      },
      className: 'characters-grid-1',
    },
    isCharacters?.length > 0 ? isCharacters.map((c, index) => 
      e(CharactersPanel, {
        key: index,
        characters: c,
        
        img: c?.character?.images?.webp?.image_url,
        
        name: c?.character?.name ? `Ім'я: ${c?.character?.name}` : `Ім'я: невідомо`,
        role: c?.role ? `Роль: ${c?.role}` : `Роль: невідомо`,
        url: c?.character?.url ? `Посилання: ${c?.character?.url}` : `Посилання: невідомо`, href: c?.character?.url ? c?.character?.url : '#',
        
        
        onClick: () => {
          //g.setIsCurrCharacter(c);
          //console.log(c);
          nav(`/InfoCharacters/${c.character.mal_id}`);
        },
      })
    ) : null,
  );
}


//персонаж панель
export function CharactersPanel(props) {
  return e(
    'div',
    {
      style: {
        height: '45vmin',
        flexDirection: 'row',
        borderRadius: '10px',
        width: '90%',
        margin: '5%',
      },
      onClick: props.onClick || null,
      className: 't-border-6 ',
    },
    e(CharactersImg, {img: props.img || ''}),
    e(CharactersInfo, {
      name: props.name || '',
      role: props.role || '',
      url: props.url || '', href: props.href || '#',
      
    }),
  );
}

function CharactersImg(props) {
  return e(
    'div',
    {
      style: {
        width: 'auto',
        aspectRatio: '2/3',
        backgroundImage: `url(${props.img || ''})`,
      },
    },
    
  );
}

function CharactersInfo(props) {
  return e(
    'div',
    {
      style: {
        width: 'auto',
        flex: '1',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      },
    },
    e(Text5, {text: props.name || ''}),
    
    e(Text4, {text: props.role || ''}),
    e(Url1, {text: props.url || '', href: props.href || '#'}),
  );
}
//298
