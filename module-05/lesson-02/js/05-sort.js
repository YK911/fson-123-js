/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 11, 2, 3];

const sorted = numbers.toSorted();
// console.log('sorted ', sorted);

const letters = ['b', 'B', 'a', 'A'].toSorted();
// console.log('letters', letters);
const lettersAsc = letters.toSorted((curr, next) => {
  return curr.localeCompare(next);
});
// console.log('🚀 ~ lettersAsc:', lettersAsc);
const lettersDesc = letters.toSorted((curr, next) => {
  return next.localeCompare(curr);
});
// console.log('🚀 ~ lettersDesc:', lettersDesc);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */
const descSortedNumbers = numbers.toSorted((curr, next) => next - curr);
const ascSortedNumbers = numbers.toSorted((curr, next) => curr - next);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted((curr, next) => {
  return next.timePlayed - curr.timePlayed;
});
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((curr, next) => {
  return curr.timePlayed - next.timePlayed;
});
// console.table(sortedByWorstPlayers);

// По першій літері имені
const byName = players.toSorted((curr, next) => {
  return curr.name.localeCompare(next.name);
});
// console.table(byName);
