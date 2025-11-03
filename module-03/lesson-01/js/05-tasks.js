/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
let odd = 0;
let even = 0;

for (const number of numbers) {
  if (number % 2 === 0) {
    // console.log(number);
    total += number;
  }
}
for (const number of numbers) {
  if (number % 2 === 0) {
    // console.log(number);
    even += number;
  } else {
    // console.log(number);

    odd += number;
  }
}
// console.log('🚀 ~ even:', even);
// console.log('🚀 ~ odd:', odd);
// console.log('total', total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
let contactBook = '';

const namesArr = names.split(',');
const phonesArr = phones.split(',');
// console.log('🚀 ~ namesArr:', namesArr);
// console.log('🚀 ~ phonesArr:', phonesArr);

for (let i = 0; i < namesArr.length; i++) {
  contactBook += `📱 ${i + 1}: ${namesArr[i]} - ${phonesArr[i]} \n`;
}

// console.log(contactBook);
/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = 'Welcome to the future';
const words = string.split(' ');
// words.shift();
// words.pop();
// console.log(words);
const updString = words.join(' ');
// console.log('🚀 ~ updString:', updString);

let output1 = '';

for (let i = 0; i < words.length; i++) {
  if (i === 0 || i === words.length - 1) {
    continue;
  }

  output1 += `${words[i]} `;
}
// console.log(output1.trim());

const output2 = words.slice(1, words.length - 1).join(' ');
// console.log('🚀 ~ output2:', output2);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;

// min = Math.min(...values);
min = values[0];

for (let i = 1; i < values.length; i++) {
  const currentNum = values[i];

  if (min > currentNum) {
    min = currentNum;
  }
}

for (let i = 0; i < values.length; i++) {
  const curr = values[i];
  const next = values[i + 1];
  // console.log('🚀 ~ curr:', curr);
  // console.log('🚀 ~ next:', next);
}

console.log(min); // 1
