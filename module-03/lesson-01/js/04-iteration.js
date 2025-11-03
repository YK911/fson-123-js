/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// for (let idx = 0; idx < friends.length; idx++) {
//   // console.log(idx);
//   // const element = friends[idx];
//   const element = friends.at(idx);
//   // console.log('🚀 ~ element:', element);
// }

// for (let idx = friends.length - 1; idx >= 0; idx--) {
//   console.log(idx);

//   const element = friends.at(idx);
//   console.log('🚀 ~ element:', element);
// }

// for (let idx = 1; idx <= friends.length; idx++) {
//   console.log(idx * -1);

//   const element = friends.at(idx * -1);
//   console.log('🚀 ~ element:', element);
// }

// console.table(friends);

// for (const element of friends) {
//   if (element === 'Kiwi') {
//     console.log(element);
//     break;
//   }

//   console.log(element);
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = '8px 11.11px';
let square;

const arrayValues = values.split(' ');
// console.log('🚀 ~ arrayValues:', arrayValues);

const width = Number.parseFloat(arrayValues[0]);
// console.log('🚀 ~ width:', width);
const height = Number.parseFloat(arrayValues[1]);
// console.log('🚀 ~ height:', height);

if (!isNaN(width) && !isNaN(height)) {
  square = width * height;
}

// console.log('🚀 ~ square:', square);
/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

let output = '';

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];

  output += `<li> ${i + 1}: ${fruit}</li>`;
  // console.log(i + 1);
  // console.log(fruit);
}

// console.log(output);
// fruitsList.innerHTML = output;
