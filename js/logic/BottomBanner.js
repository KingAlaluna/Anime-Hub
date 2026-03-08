function BottomBanner() {
  const g = s();
  const nav = useNavigate();
  
  return e(
    'div',
    {
      style: {
        ...position1,
        height: 'clamp(60px, 10%, 100px)',
        backdropFilter: 'blur(5px)',
        backgroundImage: 'var(--gradient-4)',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      className: 'panel-2',
    },
    e(Button1, {className: 'fa-home', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/');
    }}),
    e(Button1, {className: 'fa-sliders-h', noNewFav: true, onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Filter');
    }}),
    e(Button8, {className: 'fa-heart', onClick: () => {
      g.setIsPaginDocument(1);
      nav('/Favourite');
    }}),
    e(Button1, {className: 'fa-laptop-code', onClick: () => nav('/MyProjects')}),
    e(Button1, {className: 'fa-user-tie', onClick: () => nav('/AboutMe')}),
  );
}