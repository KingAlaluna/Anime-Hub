function Root() {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'auto',
        flex: '1',
        overflow: 'auto',
      },
    },
    e(Outlet),
  );
}

