/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(typeof null);

console.log(Number('5')); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('Jacob')); // NaN
console.log(Number('25px')); // NaN
console.log('5' * 2); // 10
console.log('10' - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

const userAnswer = prompt('How old are you?');
// const userAge = +userAnswer;
const userAge = Number(userAnswer);

if (typeof userAge === 'number' && !Number.isNaN(userAge)) {
  console.log('User input is number');
}
