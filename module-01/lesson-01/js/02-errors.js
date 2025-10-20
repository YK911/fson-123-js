/**
 * Типові помилки
 *
 * - Звернення до змінної до її оголошення
 * - Перевизначення значення для змінної оголошеної через const
 * - Звернення по неправильному імені змінної
 *
 */

// console.log(username);

const username = 'Mango';

let age = 20;

age = 18;
console.log('🚀 ~ age:', age);

const price = 200;

// price = 120;

console.log(price);
