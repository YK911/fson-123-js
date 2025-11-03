/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

const array1 = [1, 2, 3];
const array2 = array1;

// console.log('array1', array1);
// console.log('array2', array2);

array1[0] = 500;

// console.log('array1', array1);
// console.log('array2', array2);

// console.log(array1 === array2); // true

// console.log([] === []); // false
// console.log([1, 2, 3] === [1, 2, 3]); // false
