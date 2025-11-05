// ? Function declaration
function fn1(param1, param2 = 10) {
  // arguments = ['Mango', 2]
  // param1 = 'Mango'
  // param2 = 2
  // console.log(param1);
  // console.log(param2);
  // console.log(arguments);
  const first = arguments[1];
  // console.log('🚀 ~ fn1 ~ first:', first);

  // arguments.concat([1, 2, 3]); // ❌ error

  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    // console.log('🚀 ~ fn1 ~ element:', element);
  }

  for (const element of arguments) {
    // console.log('🚀 ~ fn1 ~ element:', element);
  }

  const args = Array.from(arguments); // Перетворення на повноцінний масив
  // console.log('🚀 ~ fn1 ~ args:', args);

  // console.log(args.concat([1, 2, 3]));
  return true;
  // return undefined
}

// const res = fn1('Mango', 2); // ? Під час виклику функція приймає аргументи
// console.log('🚀 ~ res:', res);

// ? Function expression
const fn2 = function (params) {};
// fn2();

/**
 * Псевдомасив arguments и Array.from
 */

function fn() {
  // console.log(arguments);
  const args = Array.from(arguments);
  // console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

function add() {
  // arguments = []
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total;
}

const res2 = add(1, 2, 3);
// console.log('🚀 ~ res2:', res2);
const res3 = add(1, 2, 4, 5, 6);
// console.log('🚀 ~ res3:', res3);
const res4 = add(11, 22, 44, 55, 66, 77, 99);
// console.log('🚀 ~ res4:', res4);

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total / arguments.length;

  // return add(...arguments) / arguments.length;
}

const res5 = calAverage(1, 2, 3, 4); // 2.5
console.log('🚀 ~ res5:', res5);
const res6 = calAverage(14, 8, 2); // 8
console.log('🚀 ~ res6:', res6);
const res7 = calAverage(27, 43, 2, 8, 36); // 23.2
console.log('🚀 ~ res7:', res7);
