const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */
const isAllOnline = players.every(player => {
  return player.timePlayed > 200;
});
// console.log('isAllOnline: ', isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
const isAnyOnline = players.some(player => {
  return player.online;
});
// console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => {
  return player.timePlayed > 450;
});
console.log('anyHardcorePlayers: ', anyHardcorePlayers);

// Processing form

const { registerForm } = document.forms;

registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));
  const hasEmptyValue = Object.values(formData).some(
    value => value.trim() === ''
  );
  // console.log('🚀 ~ hasEmptyValue:', hasEmptyValue);
  if (hasEmptyValue) {
    alert('Some field is empty ☹️');
    return;
  }

  const id = Date.now();

  console.log({
    id,
    ...formData,
  });

  form.reset();
});
