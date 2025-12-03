/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector('.js-user-name');

userName.addEventListener('input', handleInput);

function handleInput(event) {
  console.log('Input event', event.target.value);
  // console.log('User input');
  // const elem = event.target;
  // const isValueEmpty = elem.value.trim();
  // if (isValueEmpty.length === 0) alert('Missing chars');
}

// userName.addEventListener('blur', handleBlurInput);
// userName.addEventListener('change', handleBlurInput);
function handleBlurInput(event) {
  console.log(`Event: ${event.type} | `, event.target.value);
}
/**
 * Користувач вводить в input своє ім'я. Після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

userName.addEventListener('blur', handleInputMessage);
function handleInputMessage(event) {
  if (event.target.value.trim() === '') {
    alert('Missing chars');
    return;
  }

  alert(`Welcome onboard: ${event.target.value}`);

  event.target.value = '';
}
