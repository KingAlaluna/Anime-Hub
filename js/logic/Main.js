function Main() {
  const g = s();
  
  f(() => {
    g.setIsAnimeUrl('https://api.jikan.moe/v4/anime');
    g.setIsActBtn('fa-home');
  }, []);
  
  arrayGenres.length = 0;
  arrayTypes.length = 0;
  arrayYears.length = 0;
  arrayStudios.length = 0;
  
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
      },
    },
    e(Panel1, {text: 'Топ аніме:', animeUrl: 'top/anime'}),
    e(Panel1, {text: 'Новинки:', animeUrl: 'seasons/now', timer: 600}),
    e(Panel1, {text: 'Анонси:', animeUrl: 'seasons/upcoming', timer: 1200}),
    e(PanelRecomeng1, {text: 'Рекомендуємо:'}),
    e(Pagination1),
    e(AllLawProtected1),
  );
}



