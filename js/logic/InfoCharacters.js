function InfoCharacters() {
  const g = s();
  const c = g.isCurrCharacter;
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        minHeight: '100%',
        backgroundImage: 'var(--gradient-1)',
      },
    },
    e(CharactersGrid),
    e(Text1, {text: 'Актори/актриси озвучки (натисніть на актора/актрису для більш детальноі інформації):'}),
    e(Actors, {characters: c}),
    e(AllLawProtected1),
  );
}



function CharactersGrid() {
  const g = s();
  const c = g.isCurrCharacter;
  
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
    e(CharactersImg2, {
      img: c?.character?.images?.webp?.image_url,
    }),
    
    e(InfoCharactersPanel),
  );
}



function CharactersImg2(props) {
  return e(
    'div',
    {
      style: {
        height: 'auto',
        aspectRatio: '2/3',
        borderRadius: '10px',
        margin: '5vmin',
        width: '70%',
        ...border4,
        backgroundImage: `url(${props.img || null}), var(--gradient-18)`,
      },
    },
    
  );
}


function InfoCharactersPanel() {
  const g = s();
  const c = g.isCurrCharacter;
  
  const [isSynopsis, setIsSynopsis] = useState('');
  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/characters/${c.character.mal_id}/full`)
      .then(response => response.json())
      .then(data => {
        setIsSynopsis(data.data); 
      })
      .catch(err => console.error("Помилка API:", err));
  }, []);
  
  //console.log(isSynopsis)
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
      },
    },
    e(CharInfoGrid, {
      favorites: `Кількість фаворитів: ${isSynopsis.favorites}` || `Кількість фаворитів: невідомо`,
      anime: `В аніме: ${isSynopsis.anime?.map(e => e.anime.title).join(', ')}` || `В аніме: невідомо`,
      manga: `В мангах: ${isSynopsis.manga?.map(e => e.manga.title).join(', ')}` || `В мангах: невідомо`,
    }),
    e(Text1, {text: 'Біографія:'}),
    e(SynopsisText, {
      about: isSynopsis?.about,
    }),
  );
}




//детальна інформація
function CharInfoGrid(props) {
  const g = s();
  const c = g.isCurrCharacter;
  
  return e(
    'div',
    {
      style: {
        ...grid2,
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        margin: '5vmin',
        alignItems: 'start',
        ...border5,
        backgroundImage: 'var(--gradient-1), var(--gradient-18)',
      },
    },
    e(Text7, {text: c?.character?.name ? `Ім'я: ${c?.character?.name}` : `Ім'я: невідомо`, }),
    e(Text7, {text: c?.role ? `Роль: ${c?.role}` : `Роль: невідомо`, }),
    e(Url2, {text: c?.character?.url ? `Посилання: ${c?.character?.url}` : `Посилання: невідомо`, href: c?.character?.url ? c?.character?.url : '#', }),
    
    e(Text7, {text: props.favorites, }),
    e(Text7, {text: props.anime, }),
    e(Text7, {text: props.manga, }),
  );
} 



//біографія персонажа
function SynopsisText(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
        whiteSpace: 'pre-line'
      },
    },
    props.about || 'Нажаль, біографія цього персонажа невідома...',
  );
}




//актори
function Actors(props) {
  const g = s();
  const nav = useNavigate();
  
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
    
    props.characters?.voice_actors?.map((v, index) => 
      e(CharactersPanel, {
        key: index,
        
        img: v?.person?.images?.jpg?.image_url,
        
        name: v?.person?.name ? `Ім'я: ${v?.person?.name}` : `Ім'я: невідомо`,
        role: v?.language ? `Мова: ${v?.language}` : `Мова: невідомо`,
        url: v?.person?.url ? `Посилання: ${v?.person?.url}` : `Посилання: невідомо`, href: v?.person?.url ? v?.person?.url : '#',
        
        onClick: () => {
          g.setIsCurrActors(v);
          nav('InfoActors');
        },
      }),
    ),
  );
}