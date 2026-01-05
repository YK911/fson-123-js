import '../common.css';

/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

showNotification();

/*
 * Функції
 */
function onNotificationClick() {}

function showNotification() {
  notification.classList.add('is-visible');

  setTimeout(() => {
    notification.classList.remove('is-visible');
  }, NOTIFICATION_DELAY);
  console.log(
    'Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим'
  );
}

function hideNotification() {}
