function Root() {
  return e(
    'div',
    {
      style: {
        height: 'auto',
        flex: '1',
        overflow: 'auto',
        backgroundColor: 'var(--color-fff)',
      },
    },
    e(InputSearch),
    e(Outlet),
  );
}

