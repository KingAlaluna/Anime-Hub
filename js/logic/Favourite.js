function Favourite() {
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
    e(PanelRecomeng1, {text: 'Ваші улюбленні аніме:', animeFavourite: true, timer: 0}),
    e(Pagination1),
    e(AllLawProtected1),
  );
}