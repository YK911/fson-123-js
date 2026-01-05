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
const btnEl = document.querySelector('button');

showNotification();
notification.addEventListener('click', onNotificationClick);
btnEl.addEventListener('click', showNotificationId);

/**
 * Функції
 */
function onNotificationClick() {
  if (!timeoutId) {
    return;
  }
  hideNotification();
  clearTimeout(timeoutId);
  console.log(timeoutId);
}

function showNotification() {
  notification.classList.add('is-visible');

  timeoutId = setTimeout(hideNotification, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}

function showNotificationId() {
  console.log(timeoutId);
}
