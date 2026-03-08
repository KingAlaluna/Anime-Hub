function MainLogic() {
  //хуки
  const [isDarkTheme, setIsDarkTheme] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches);
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
      e(TopBanner),
      e(Routes, null,
        e(Route, {element: e(Root)},
          e(Route, {path: '/', element: e(Main)}),
          e(Route, {path: '/Filter', element: e(Filter)}),
          e(Route, {path: '/Favourite', element: e(Favourite)}),
          e(Route, {path: '/MyProjects', element: e(MyProjects)}),
          e(Route, {path: '/AboutMe', element: e(AboutMe)}),
          e(Route, {path: '/AnimeViewing', element: e(AnimeViewing)}),
          e(Route, {path: '/InfoCharacters', element: e(InfoCharacters)}),
          e(Route, {path: '/InfoActors', element: e(InfoActors)}),
          e(Route, {path: '/AnimeSearch', element: e(AnimeSearch)}),
        ),
      ),
      e(BottomBanner),
    ),
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(MainLogic));