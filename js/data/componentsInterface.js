//шаблони кнопок
function Button1(props) {
  const g = s();
  return e(
    'button',
    {
      style: {
        ...button1,
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
      className: 'fa-solid ' + props.className + ' ' + (props.className2 ? props.className2 : '') || null,
    },
    props.svg || null,
  );
}

function Button2(props) {
  return e(
    'button',
    {
      style: {
        ...button2,
        background: props.bg || 'var(--gradient-7)',
      },
      onClick: props.onClick || null,
      className: 'button-3',
    },
    props.text,
  );
}

function Button3(props) {
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

function Button4(props) {
  return e(
    'button',
    {
      style: {
        ...button3,
        ...title2,
        backgroundImage: props.aniFavourite ? 'var(--gradient-15), var(--gradient-13)' : 'var(--gradient-14), var(--gradient-12)',
        fontSize: 'clamp(20px, 3vh, 30px)',
        height: 'clamp(30px, 5vh, 40px)',
        width: props.width || '90%',
      },
      onClick: () => {
        props.onClick?.() || null;
      },
      className: `fa-solid fa-heart`,
    },
    
  );
}


function Button6(props) {
  const g = s();
  const [isActive, setIsActive] = useState(false);
  
  return e(
    'button',
    {
      style: {
        ...button3,
        background: props.isAc ? (g[`is${props.isAc}`] == props.text && g[`is${props.isAc}2`] == true ? 'var(--gradient-8)' : 'var(--gradient-5)') : (isActive ? 'var(--gradient-8)' : 'var(--gradient-5)'),
      },
      onClick: () => {
        props.isAc ? (g[`setIs${props.isAc}`](props.text)) : (setIsActive(!isActive));
        props.isAc ? (g[`is${props.isAc}`] !== props.text && g[`is${props.isAc}2`] == true ? g[`setIs${props.isAc}2`](true) : g[`setIs${props.isAc}2`](!g[`is${props.isAc}2`])) : null;
        props.onClick?.() || null;
      },
    },
    props.text,
  );
}

function Button7(props) {
  return e(
    'button',
    {
      style: {
        ...button1,
        color: props.color || 'var(--color-000)',
        backgroundImage: props.bg ? (props.bg) : ('var(--gradient-5)'),
      },
      onClick: () => {
        props.onClick?.() || null;
      },
      className: 'fa-solid ' + props.className || null,
    },
    props.svg || null,
  );
}

function Button8(props) {
  const g = s();
  return e(
    'button',
    {
      style: {
        ...button1,
        ...title2,
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
      className: 'fa-solid ' + props.className + ' ' + (props.className2 ? props.className2 : '') || null,
    },
    props.svg || null,
  );
}




//шаблони тексту
function Text1(props) {
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

function Text2(props) {
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

function Text3(props) {
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

function Text4(props) {
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
        ...border6,
      },
    },
    props.text,
  );
}

function Text5(props) {
  return e(
    props.type || 'h3',
    {
      style: {
        margin: '1vmin 5%',
        wordBreak: 'break-all',
        display: 'block',
        height: 'max-content',
        width: '90%',
        ...title3,
        fontFamily: 'Oswald, sans-serif',
      },
    },
    props.text,
  );
}

function Text6(props) {
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

function Text7(props) {
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



function Url1(props) {
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
        ...border6,
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
    props.text || '',
  );
}

function Url2(props) {
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



//аніме
//аніме топ та похоже
function AnimeContainer1(props) {
  return e(
    'div',
    {
      style: {
        width: '45vmin',
        height: 'max-content',
        borderRadius: '10px',
        margin: '2.5vmin',
        ...border4,
        backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
      },
      className: 'anime-1',
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
function AnimeContainer2(props) {
  return e(
    'div',
    {
      style: {
        width: '90%',
        height: 'max-content',
        borderRadius: '10px',
        margin: '2vmin',
        ...border4,
        backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
      },
      className: 'anime-1',
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

function Anime2(props) {
  return e(
    'div',
    {
      style: {
        width: '70%',
        height: 'auto',
        aspectRatio: '5/7',
        borderRadius: '10px',
        margin: '5vmin',
        ...border4,
        backgroundImage: `url(${props.img || null}), var(--gradient-18)`,
      },
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
    
    e(Button4, {onClick: props.onClickFav || null, aniFavourite: props.aniFavourite || false, }),
  );
}




//панелі з аніме
//аніме топ та похоже
function Panel1(props) {
  return e(
    'div',
    {
      style: {
        ...border2,
        backgroundImage: 'var(--gradient-2), var(--gradient-17)',
        height: 'max-content',
        //padding: '5vh 0',
      },
    },
    e(Text1, {text: props.text}),
    e(Panel2, {animeUrl: props.animeUrl}),
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
    e(Panel3, {animeUrl: props.animeUrl}),
  );
}


//панель аніме топ та інші
function Panel3(props) {
  const g = s();
  const [animeList, setAnimeList] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/${props.animeUrl}`)
      .then(response => response.json())
      .then(data => {
        setAnimeList(data.data); 
      })
      .catch(err => console.error("Помилка API:", err));
  }, []);

  return e(
    'div',
    {
      style: {
        ...grid1,
        height: 'max-content',
        width: 'max-content',
        overflow: 'auto',
        gridTemplateColumns: 'repeat(25, 1fr)',
        alignItems: 'start',
      },
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
          nav('/AnimeViewing');
          g.setIsAnimeData(anime);
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
function PanelRecomeng1(props) {
  return e(
    'div',
    {
      style: {
        ...border2,
        backgroundImage: 'var(--gradient-2), var(--gradient-17)',
        height: 'max-content',
        //padding: '5vh 0',
      },
    },
    e(Text1, {text: props.text}),
    e(PanelRecomeng2, {url: props.url || null, animeFavourite: props.animeFavourite || null, }),
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
    }, props.timeout || 2000);
    
    return () => clearTimeout(timer);
    } else {
      setAnimeLists(g.isAnimeFavourite);
      g.setIsAllPaginDocument(Math.ceil(((g.isAnimeFavourite?.length || 0) / 25)) < 1 ? 1 : Math.ceil(g.isAnimeFavourite?.length / 25));
    }
  }, [props.url, g.isAnimeFavourite, g.isPaginDocument]);
  
  
  return e(
    'div',
    {
      style: {
        ...grid2,
        height: 'max-content',
        alignItems: 'start',
      },
      className: 'panel-recomeng-1',
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
          nav('/AnimeViewing');
          g.setIsAnimeData(anime);
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



//пагінація
function Pagination1() {
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
    e(Button7, {className: 'fa-arrow-left',
      onClick: () => {
        g.isPaginDocument >1 ? g.setIsPaginDocument(g.isPaginDocument - 1) : null;
      },
    }),
    e(Text2, {text: `${g.isPaginDocument} / ${g.isAllPaginDocument}`}),
    e(Button7, {className: 'fa-arrow-right',
      onClick: () => {
        g.isPaginDocument < g.isAllPaginDocument ? g.setIsPaginDocument(g.isPaginDocument + 1) : null;
      },
    }),
  );
}



//авторсткі права
function AllLawProtected1() {
  return e(
    'div',
    {
      style: {
        height: '25vh',
        margin: '2vmin auto auto auto',
        justifyContent: 'center',
        ...border3,
        backgroundImage: 'var(--gradient-3), var(--gradient-17)',
        backgroundClip: 'padding-box, padding-box, border-box',
      },
    },
    e(Text2, {text: '© 2026 AnimeHub. Всі права захищені.'}),
  );
}



//фільтер
function FilterPanel(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        ...border2,
        backgroundImage: 'var(--gradient-1), var(--gradient-17)',
        backgroundClip: 'padding-box, padding-box, border-box',
      },
    },
    e(Text1, {text: 'Виберіть фільтри:'}),
    e(FilterPanel2, {text: 'Жанри:', btnFilters: props.btnFilterGenres || null, array: props.arrayGenres || null, }),
    e(FilterPanel2, {text: 'Типи:', btnFilters: props.btnFiltersTypes || null, array: props.arrayTypes || null, isAc: 'ActAnimeType',}),
    e(FilterPanel2, {filter: FilterPanel4, text: 'Роки:', btnFilters: props.btnFiltersYears || null, array: props.arrayYears || null, isAc: 'ActAnimeYear',}),
    e(FilterPanel2, {text: 'Студії:', btnFilters: props.btnFiltersStudios || null, array: props.arrayStudios || null, }),
    e(Button2, {text: 'Підтвердити', onClick: props.onClick || null}),
  );
}

function FilterPanel2(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
      },
    },
    e(Text3, {text: props.text}),
    e(props.filter || FilterPanel3, {btnFilters: props.btnFilters || null, array: props.array || null, isAc: props.isAc || null,}),
  );
}

function FilterPanel3(props) {
  const g = s();
  return e(
    'div',
    {
      style: {
        ...grid2,
        height: 'max-content',
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      className: 'filter-1',
    },
    props?.btnFilters?.map?.((b, index) => 
      e(Button6, {
        key: index,
        text: b.name,
        isAc: props.isAc || null,
        onClick: () => {
          if (props.isAc) {
            if (g[`is${props.isAc}`] !== b.name || g[`is${props.isAc}2`] !== true) {
              props.array.length = 0;
              props.array.push(b.url);
            } else {
              props.array.length = 0;
            }
          } else {
            const index = props?.array?.indexOf(b.url);
            if (index === -1) {
              props?.array?.push(b.url);
            } else {
              props?.array?.splice(index, 1);
            }
          }
        },
      }) || null,
    ),
  );
}

function FilterPanel4(props) {
  const g = s();
  return e(
    'div',
    {
      style: {
        ...grid3,
        height: 'max-content',
        padding: '0 1.25vw 0 1.25vw',
      },
      className: 'filter-2',
    },
    props?.btnFilters?.map?.((b, index) => 
      e(Button6, {
        key: index,
        text: b.name,
        isAc: props.isAc || null,
        onClick: () => {
          if (props.isAc) {
            if (g[`is${props.isAc}`] !== b.name || g[`is${props.isAc}2`] !== true) {
              props.array.length = 0;
              props.array.push(b.url);
            } else {
              props.array.length = 0;
            }
          } else {
            const index = props?.array?.indexOf(b.url);
            if (index === -1) {
              props?.array?.push(b.url);
            } else {
              props?.array?.splice(index, 1);
            }
          }
        },
      }) || null,
    ),
  );
}



//Markdown
function Markdown1(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        width: '90%',
      },
      dangerouslySetInnerHTML: { __html: window.marked.parse(props.text) },
      className: 'markdown',
    },
  );
}