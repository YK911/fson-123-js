/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// console.log('Before');

// const guessNumber = prompt('What number?');

// if (typeof Number(guessNumber) === 'number' && 4 === Number(guessNumber)) {
//   console.log('Congrats!!! You guess the number 😎');
// } else {
//   console.log('Sorry... you miss');
// }

// console.log('After');

/**
 * -----------------------------
 */
const points = 1000;

// if (points <= 500) {
//   console.log('Level 1');
// } else if (points < 1500) {
//   console.log('Level 2');
// } else if (points < 4500) {
//   console.log('Level 3');
// } else {
//   console.log('Level 4');
// }

/**
 * -----------------------------
 */
const balance = -1000;
// let message; // undefined

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }

const message = balance >= 0 ? 'Positive' : 'Negative';
console.log(message);

// if (points <= 500) {
//   console.log('Level 1');
// } else if (points < 1500) {
//   console.log('Level 2');
// } else if (points < 4500) {
//   console.log('Level 3');
// } else {
//   console.log('Level 4');
// }

const level =
  points <= 500
    ? 'Level 1'
    : points < 1500
    ? 'Level 2'
    : points < 4500
    ? 'Level 3'
    : 'Level 4';

// console.log('🚀 ~ level:', level);
