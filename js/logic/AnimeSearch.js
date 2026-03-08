function InputSearch() {
  const g = s();
  const nav = useNavigate();
  const {search} = useParams();
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const query = encodeURIComponent(event.target.value);
      nav(`/AnimeSearch/${query}`);
      g.setIsPaginDocument(1);
      g.setIsAnimeUrl(`https://api.jikan.moe/v4/anime?q=${query}`);
      g.setIsInputSearshAc(false);
    }
  };
  
  return e(
    'input',
    {
      style: {
        height: 'clamp(40px, 8vh, 60px)',
        width: '100%',
        border: 'none',
        ...border8,
        outline: 'none',
        padding: '1vh 3vw',
        display: g.isInputSearshAc ? 'block' : 'none',
      },
      type: 'search',
      placeholder: 'Введіть назву аніме...',
      onKeyDown: handleKeyDown,
    },
    
  );
}


function AnimeSearch() {
  const g = s();
  
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
      },
    },
    e(PanelRecomeng1, {text: 'Результати пошуку:', url: g.isAnimeUrl, timer: 0,}),
    e(Pagination1),
    e(AllLawProtected1),
  );
}

