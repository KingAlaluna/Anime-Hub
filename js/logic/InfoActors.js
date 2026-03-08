function InfoActors() {
  const g = s();
  const {actorsId} = useParams();
  
  f(() => {
    fetch(`https://api.jikan.moe/v4/people/${actorsId}/full`)
      .then(response => response.json())
      .then(data => {
        g.setIsCurrActors(data.data); 
      })
      .catch(err => console.error("Помилка завантаження інформації про актора:", err));
  }, []);
  
  if (!g.isCurrActors) {
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
      img: c?.images?.jpg?.image_url,
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
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
      },
    },
    e(AInfoGrid),
    e(Text1, {text: 'Біографія:'}),
    e(ASynopsisText),
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
    e(Text7, {text: c?.name ? `Ім'я: ${c?.name}` : `Ім'я: невідомо`, }),
    e(Url2, {text: c?.url ? `Посилання: ${c?.url}` : `Посилання: невідомо`, href: c?.url ? c?.url : '#', }),
    
    e(Text7, {text: c?.favorites ? `Кількість фаворитів: ${c?.favorites}` : `Кількість фаворитів: невідомо`, }),
    e(Text7, {text: c?.anime && c?.anime?.length > 0 ? `В аніме: ${c?.anime?.map(e => e?.anime?.title).join(', ')}` : `В аніме: невідомо`, }),
    e(Text7, {text: c?.manga && c?.manga?.length > 0 ? `В мангах: ${c?.manga?.map(e => e?.manga?.title).join(', ')}` : `В мангах: невідомо`, }),
  );
} 



//біографія персонажа
function ASynopsisText(props) {
  const g = s();
  const c = g.isCurrActors;
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
        whiteSpace: 'pre-line',
      },
    },
    c?.about || 'Нажаль, біографія цього актора невідома...',
  );
}


