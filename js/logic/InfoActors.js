function InfoActors() {
  const g = s();
  const c = g.isCurrActors;
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        minHeight: '100%',
        backgroundImage: 'var(--gradient-1)',
      },
    },
    e(Button5, {className: 'fa-arrow-left', onClick: () => g.setIsDisplay('InfoCharacters')}),
    
    e(ActorsGrid),
    e(AllLawProtected1),
  );
}



function ActorsGrid() {
  const g = s();
  const c = g.isCurrActors;
  
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
    e(ActorsImg2, {
      img: c?.person?.images?.jpg?.image_url,
    }),
    
    e(InfoActorsPanel),
  );
}



function ActorsImg2(props) {
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


function InfoActorsPanel() {
  const g = s();
  const c = g.isCurrActors;
  
  const [isSynopsis, setIsSynopsis] = useState('');
  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/people/${c?.person?.mal_id}/full`)
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
    e(AInfoGrid, {
      favorites: isSynopsis?.favorites ? `Кількість фаворитів: ${isSynopsis?.favorites}` : `Кількість фаворитів: невідомо`,
      anime: isSynopsis?.anime ? `В аніме: ${isSynopsis?.anime?.map(e => e.anime.title).join(', ')}` : `В аніме: невідомо`,
      manga: isSynopsis?.manga ? `В мангах: ${isSynopsis?.manga?.map(e => e.manga.title).join(', ')}` : `В мангах: невідомо`,
    }),
    e(Text1, {text: 'Біографія:'}),
    e(ASynopsisText, {
      about: isSynopsis?.about,
    }),
  );
}




//детальна інформація
function AInfoGrid(props) {
  const g = s();
  const c = g.isCurrActors;
  
  return e(
    'div',
    {
      style: {
        ...grid2,
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        ...border5,
        backgroundImage: 'var(--gradient-1), var(--gradient-18)',
        margin: '5vmin',
        alignItems: 'start',
      },
    },
    e(Text7, {text: c?.person?.name ? `Ім'я: ${c?.person?.name}` : `Ім'я: невідомо`, }),
    e(Text7, {text: c?.language ? `Мова: ${c?.language}` : `Мова: невідомо`, }),
    e(Url2, {text: c?.person?.url ? `Посилання: ${c?.person?.url}` : `Посилання: невідомо`, href: c?.person?.url ? c?.person?.url : '#', }),
    
    e(Text7, {text: props.favorites || '', }),
    e(Text7, {text: props.anime || '', }),
    e(Text7, {text: props.manga || '', }),
  );
} 



//біографія персонажа
function ASynopsisText(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
        whiteSpace: 'pre-line',
      },
    },
    props.about || 'Нажаль, біографія цього актора невідома...',
  );
}


