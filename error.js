window.onerror = function(message, source, lineno, colno, error) {
  console.error("Критична помилка:", message, "в файлі:", source);
  return false;
};

window.onunhandledrejection = function(event) {
  console.error("Проміс помилка:", event.reason);
};
