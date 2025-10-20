/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(typeof String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// console.log('5' + 3); // "53"
// console.log('5' + true); // "5true"
// console.log('5' + false); // "5false"
// console.log('5' + null); // "5null"
// console.log('5' + undefined); // "5undefined"

const operation = 5 + (100 + '12') + true;
const op = '510012' + 'true';
// console.log('🚀 ~ operation:', operation); // 15true12 | true | 105true12 | 5100tru12 | 10612
const oper = Number(true) * Number('100');
// console.log('🚀 ~ oper:', oper);
