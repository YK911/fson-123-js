/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';

const fullName = firstName + ' ' + lastName + ' ' + '😎';
// console.log(fullName);

const quantity = 15;
// const orderMsg = 'You ordered' + ' ' + quantity + ' ' + 'bots';
// const orderMsg = `You ordered ${prompt('Enter bots quantity')} bots`;
// console.log(orderMsg);

const message = '             This string is 28 chars long           ';
// console.log(message);
// console.log(message.length);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;

console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
