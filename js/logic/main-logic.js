import '../../sw-init.js';

import {
  e, 
  useEffect, 
  useState, 
  GlobalContext, 
  createRoot,
  
  HashRouter,
  Routes,
  Route,
} from '../data/initial-state.js';

import {MainBanner} from './main-banner.js';
import {BottomNav} from './bottom-nav.js';
import {Root} from './root.js';
import {Main} from './pages/main.js';
import {InfoActors} from './pages/info-actors.js';
import {InfoCharacters} from './pages/info-characters.js';
import {AnimeViewing} from './pages/anime-view.js';
import {AnimeSearch} from './pages/anime-search.js';
import {Favourite} from './pages/anime-favorites.js';
import {Filter} from './pages/anime-filter.js';


function MainLogic() {
  //хуки
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('AnimeHubDarkTheme') || window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  const [isActBtn, setIsActBtn] = useState('fa-home');
  
  //аніме
  const [isAnimeData, setIsAnimeData] = useState([]);
  const [isAnimeUrl, setIsAnimeUrl] = useState('https://api.jikan.moe/v4/anime');
  const [isActAnimeType, setIsActAnimeType] = useState('');
  const [isActAnimeYear, setIsActAnimeYear] = useState('');
  const [isActAnimeType2, setIsActAnimeType2] = useState(false);
  const [isActAnimeYear2, setIsActAnimeYear2] = useState(false);
  const [isAnimeFavourite, setIsAnimeFavourite] = useState(JSON.parse(localStorage.getItem('my_anime_favs')) || []);
  
  
  const [isCurrCharacter, setIsCurrCharacter] = useState(null);
  const [isCurrActors, setIsCurrActors] = useState(null);
  
  const [isInputSearshAc, setIsInputSearshAc] = useState(false);
  
  //пагінація
  const [isPaginDocument, setIsPaginDocument] = useState(1);
  const [isAllPaginDocument, setIsAllPaginDocument] = useState(1);
  
  
  
  //зміна теми
  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);
  
  
  
  //глобальная видимость
  let allState = {
    isDarkTheme,
    setIsDarkTheme,
    isActBtn,
    setIsActBtn,
    
    
    isAnimeData,
    setIsAnimeData,
    isAnimeUrl,
    setIsAnimeUrl,
    isInputSearshAc,
    setIsInputSearshAc,
    
    isActAnimeType,
    setIsActAnimeType,
    isActAnimeYear,
    setIsActAnimeYear,
    
    isActAnimeType2,
    setIsActAnimeType2,
    isActAnimeYear2,
    setIsActAnimeYear2,
    
    isAnimeFavourite,
    setIsAnimeFavourite,
    
    
    isCurrCharacter,
    setIsCurrCharacter,
    isCurrActors,
    setIsCurrActors,
    
    
    //пагінація
    isPaginDocument,
    setIsPaginDocument,
    isAllPaginDocument,
    setIsAllPaginDocument,
  };
  
  
  return e(
    HashRouter, null,
    e(
      GlobalContext.Provider, { value: allState },
      e(MainBanner),
      e(Routes, null,
        e(Route, {element: e(Root)},
          e(Route, {path: '/', element: e(Main)}),
          e(Route, {path: '/Filter', element: e(Filter)}),
          e(Route, {path: '/Favourite', element: e(Favourite)}),
          e(Route, {path: '/AnimeViewing/:animeId', element: e(AnimeViewing)}),
          e(Route, {path: '/InfoCharacters/:characterId', element: e(InfoCharacters)}),
          e(Route, {path: '/InfoActors/:actorsId', element: e(InfoActors)}),
          e(Route, {path: '/AnimeSearch/:search', element: e(AnimeSearch)}),
        ),
      ),
      e(BottomNav),
    ),
  );
}


const root = createRoot(document.getElementById('root'));
root.render(e(MainLogic));
