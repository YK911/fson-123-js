/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

let a = 100;
let b = 20;

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 5;
const max = 15;
let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}

// console.log('Total: ', total);

function calcEvenNumbersSum(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let total = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }

  return total;
}

const res1 = calcEvenNumbersSum(0, 5);
console.log('🚀 ~ res1:', res1);
const res2 = calcEvenNumbersSum(10, 15);
console.log('🚀 ~ res2:', res2);
const res3 = calcEvenNumbersSum(100, 15);
console.log('🚀 ~ res3:', res3);
