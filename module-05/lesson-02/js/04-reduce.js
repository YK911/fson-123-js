/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, number, idx, arr) => {
  if (number > 11) {
    return acc + number;
  }
  return acc;
}, 0);
// console.log(total);

/**
 * Рахуємо загальну зарплат
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, item, idx, arr) => {
  return acc + item;
}, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, player) => {
  return acc + player.timePlayed;
}, 0);

const playerNames = players.reduce((acc, player) => {
  acc.push(player.name);
  return acc;
}, []);

// const playersData = players.reduce((acc, player) => {
//   acc.push({
//     name: player.name,
//     timePlayed: player.timePlayed + player.timePlayed * 0.5,
//   });

//   return acc;
// }, []);
const playersData = players.reduce((acc, player) => {
  acc.totalTime
    ? (acc.totalTime = acc.totalTime + player.timePlayed)
    : (acc.totalTime = player.timePlayed);

  acc.names ? acc.names.push(player.name) : (acc.names = [player.name]);

  return acc;
}, {});
// console.log(playersData);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, item) => {
  return (acc += item.price * item.quantity);
}, 0);
console.log(totalAmount);

const cartTable = cart.reduce((acc, item) => {
  return (acc += `|${item.label.padEnd(9, ' ')}    |${String(
    item.price * item.quantity
  ).padEnd(13, ' ')} |\n`);
}, `|${'Name:'.padEnd(9, ' ')}    |${'Total price'.padEnd(14, ' ')}|\n==============================\n`);

console.log(cartTable);
