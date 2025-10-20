/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;
const c = 144;

const res1 = a ** b;
// console.log('🚀 ~ res1:', res1);

const res2 = c ** 0.5;
// console.log('🚀 ~ res2:', res2);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const res3 = apples + grapes;
// console.log('🚀 ~ res3:', res3);

const res4 = apples - grapes;
// console.log('🚀 ~ res4:', res4);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
let teachers = 20;
// students = students + 50;

students += 50;

const totalPeople = students + teachers;

// teachers -= 2;

teachers /= 2;

// console.log('🚀 ~ students:', students);
// console.log('🚀 ~ teachers:', teachers);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

// const result = 108 + (223 - 2) * 5;
const result = 108 + 223 - 2 * 5;
// console.log('🚀 ~ result:', result);
