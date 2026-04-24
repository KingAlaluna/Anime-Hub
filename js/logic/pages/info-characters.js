import {e, s, useNavigate, useParams, f, } from '../../data/initial-state.js';
import {FooterCopy} from '../../layout/footer-copy.js';
import {Text1, Text7} from '../../layout/texts.js';
import {Url2} from '../../layout/urls.js';
import {CharactersPanel} from './anime-view.js';


export function InfoCharacters() {
  const g = s();
  const c = g.isCurrCharacter;
  const {characterId} = useParams();
  
  f(() => {
    fetch(`https://api.jikan.moe/v4/characters/${characterId}/full`)
      .then(rec => rec.json())
      .then(data => {
        g.setIsCurrCharacter(data.data);
      })
      .catch(err => console.error('Помилка завантаження інформації персонажа', err));
  }, []);
  
  if (!g.isCurrCharacter) {
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
    e(CharactersGrid),
    e(Text1, {text: 'Актори/актриси озвучки (натисніть на актора/актрису для більш детальноі інформації):'}),
    e(Actors, {characters: c}),
    e(FooterCopy),
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
      img: c?.images?.webp?.image_url,
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
        backgroundImage: `url(${props.img || null}), var(--gradient-18)`,
      },
      className: 't-border-4 ',
    },
    
  );
}


function InfoCharactersPanel() {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
      },
    },
    e(CharInfoGrid),
    e(Text1, {text: 'Біографія:'}),
    e(SynopsisText),
  );
}




//детальна інформація
function CharInfoGrid() {
  const g = s();
  const c = g.isCurrCharacter;
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        width: '90%',
        borderRadius: '10px',
        margin: '5vmin',
        alignItems: 'start',
        backgroundImage: 'var(--gradient-1), var(--gradient-18)',
      },
      className: 't-grid-2 t-border-5 ',
    },
    e(Text7, {text: c?.name ? `Ім'я: ${c?.name}` : `Ім'я: невідомо`, }),
    e(Url2, {text: c?.url ? `Посилання: ${c?.url}` : `Посилання: невідомо`, href: c?.url ? c?.url : '#', }),
    
    e(Text7, {text: `Кількість фаворитів: ${c?.favorites}` || `Кількість фаворитів: невідомо`, }),
    e(Text7, {text: `В аніме: ${c?.anime?.map(e => e?.anime?.title).join(', ')}` || `В аніме: невідомо`, }),
    e(Text7, {text: `В мангах: ${c?.manga?.map(e => e?.manga?.title).join(', ')}` || `В мангах: невідомо`, }),
  );
} 



//біографія персонажа
function SynopsisText() {
  const g = s();
  const c = g.isCurrCharacter;
  
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '5vmin',
        whiteSpace: 'pre-line'
      },
    },
    c?.about || 'Нажаль, біографія цього персонажа невідома...',
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
    
    props.characters?.voices?.map((v, index) => 
      e(CharactersPanel, {
        key: index,
        
        img: v?.person?.images?.jpg?.image_url,
        
        name: v?.person?.name ? `Ім'я: ${v?.person?.name}` : `Ім'я: невідомо`,
        role: v?.language ? `Мова: ${v?.language}` : `Мова: невідомо`,
        url: v?.person?.url ? `Посилання: ${v?.person?.url}` : `Посилання: невідомо`, href: v?.person?.url ? v?.person?.url : '#',
        
        onClick: () => {
          nav(`/InfoActors/${v?.person?.mal_id}`);
        },
      }),
    ),
  );
}
//186