/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

function add(a, b, c) {
  return a + b + c;
}

// () => {};

// ? Function expression
// const addArrow = (a, b, c) => {
const addArrow = (a, b, ...args) => {
  // console.log(arguments);
  console.log(args);

  // return args;
};

// ? Implicite return
// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15, 'asd', false, { one: 'one' }));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

// console.log(fnA());

const arrowFnA = () => ({ a: 5 });

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, function (x, y) {
  return x + y;
});
calc(2, 3, (x, y) => x + y);

// ==========================

calc(10, 8, function (x, y) {
  return x - y;
});
calc(10, 8, (x, y) => x - y);
