if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
    } catch (e) {
      console.log('Помилка sw-init.js', e);
    }
  });
}