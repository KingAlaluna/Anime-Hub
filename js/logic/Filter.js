function Filter() {
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
    e(FilterPanel, {
      //кнопки параметрів сортування
      btnFilterGenres: filterGenres,
      btnFiltersTypes: filtersTypes,
      btnFiltersYears: filtersYears,
      btnFiltersStudios: filtersStudios,
      
      //вибрані параметри сортування
      arrayGenres,
      arrayTypes,
      arrayYears,
      arrayStudios,
      
      //підтвердити вибрані параметри
      onClick: () => {
        g.setIsPaginDocument(1);
        g.setIsAnimeUrl(buildAnimeUrl({
          arrayGenres,
          arrayTypes,
          arrayYears,
          arrayStudios,
        }));
      },
    }),
    e(PanelRecomeng1, {text: 'Результати фільтра:', url: g.isAnimeUrl, timer: 0, }),
    e(Pagination1),
    e(AllLawProtected1),
  );
}


//новий url для фільтрації аніме
function buildAnimeUrl(props) {
  const baseUrl = 'https://api.jikan.moe/v4/anime';
  const params = new URLSearchParams();
  
  // Додаємо жанри
  if (props.arrayGenres.length > 0) {
    params.append('genres', props.arrayGenres.join(','));
  }
  // Додаємо студії
  if (props.arrayStudios.length > 0) {
    params.append('producers', props.arrayStudios.join(','));
  }
  // Додаємо тип
  if (props.arrayTypes.length > 0) {
    params.append('type', props.arrayTypes[0]);
  }
  // Додаємо рік
  if (props.arrayYears.length > 0) {
    params.append('start_date', `${props.arrayYears[0]}-01-01`);
  }

  return `${baseUrl}?${params.toString()}`;
}
