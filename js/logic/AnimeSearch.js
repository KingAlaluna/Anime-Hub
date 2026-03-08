function InputSearch() {
  const g = s();
  const nav = useNavigate();
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      nav('/AnimeSearch');
      g.setIsPaginDocument(1);
      g.setIsAnimeUrl(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(event.target.value)}`);
      g.setIsInputSearshAc(false);
    }
  };
  
  return e(
    'input',
    {
      style: {
        height: '10%',
        position: 'fixed',
        top: '10%',
        left: '0',
        width: '100%',
        border: 'none',
        ...border8,
        outline: 'none',
        zIndex: '999',
        padding: '3vmin',
        display: g.isInputSearshAc ? 'block' : 'none',
      },
      type: 'search',
      placeholder: 'Введіть назву аніме...',
      className: 'input-search',
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
    e(PanelRecomeng1, {text: 'Результати пошуку:', url: g.isAnimeUrl, timeout: 0,}),
    e(Pagination1),
    e(AllLawProtected1),
  );
}