/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

const values = ['Adam', 'Alice', 'Mango', 'Poly'];
// console.table(values);
// console.log(values.length);
// console.log(values[2]);

// const elem1 = values.at(0);
// console.log('🚀 ~ elem1:', elem1);

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.table(courses);

// ? Досутп до останнього елемента колекції
// const lastElemIdx = courses.length - 1;
// console.log(lastElemIdx);
// const lastItem = courses[lastElemIdx];

// const idx = Number(prompt('Insert idx of element'));

// const searchedElement = courses[Number(prompt('Insert idx of element'))];
// console.log('🚀 ~ searchedElement:', searchedElement);

// const lastEl = courses.at(-2);
// console.log('🚀 ~ lastEl:', lastEl);

// const userName = 'Mango';
// const lastLetter = userName[-1];
// console.log('🚀 ~ lastLetter:', lastLetter);

courses[1] = 'Jacob';
courses[3] = 'Adrian';
// courses[999] = 'Mango'; //! Не ефективне використання масиву
// courses['one'] = 'MongoDB';

// console.log(courses['one']); //! Не ефективне використання масиву

console.table(courses);

// console.log(courses.length);

// const lastIndex = courses.length - 1;
// console.log(lastIndex);
