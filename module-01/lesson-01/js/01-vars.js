/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let и const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// result -> undefined;
let result;

// const mainPrice = 10_000_000;
// console.log('🚀 ~ mainPrice:', mainPrice);

const price = 100;
const quantity = 11;

const discountBronze = 0.1;
const discountSilver = 0.15;
const discountGold = 0.25;

// price = 90; // ❌ error

result = (price - price * discountBronze) * quantity;
// console.log(result);

result = (price - price * discountSilver) * quantity;
// console.log(result);

result = (price - price * discountGold) * quantity;
// console.log(result);

const userName = 'Mango';
const uName = 'Mango';

const ageStr = '18';
console.log('🚀 ~ ageStr:', ageStr);
console.log('🚀 ~ ageStr:', typeof ageStr);
const ageNum = 18;
console.log('🚀 ~ ageNum:', typeof ageNum);

if (false) {
  console.log('Show message: Yahoooo!!!');
}

let darkTheme = null;
// Click on button

darkTheme = {
  color: 'white',
  backgroundColor: 'black',
};

// userCost;
// console.log('🚀 ~ userCost:', typeof userCost.value);

if (typeof userCost.value === 'string') {
  const userNumber = Number(userCost.value);
  console.log('🚀 ~ userNumber:', userNumber);
}
