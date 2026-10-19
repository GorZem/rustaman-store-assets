/* RUSTAMAN Store: настройки шаблона GameStores (Внешний вид → Продвинутая конфигурация → JavaScript).
   Переменные описаны на wiki.gamestores.app/ru/global-vars */
(function () {
  function config() {
    window.productsGrid = 5;          // пять пакетов coins в один ряд
    window.currency = '₽';
    window.storeCommand = '/bucket';  // наш /store занят игровым магазином
    window.oldInstantProducts = true; // coins выдаются сразу, без корзины
    window.hideFavorites = true;
    window.dispatchEvent(new CustomEvent('setCustomConfig'));
  }
  config();
  if (!window.isAppReady) window.addEventListener('appReady', config, { once: true });
})();
