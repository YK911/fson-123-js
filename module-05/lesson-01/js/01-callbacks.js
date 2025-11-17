/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  // message = 'A message'
  // callback = fnB

  console.log(callback);
  console.log(message);

  // callback(100);

  // fnB(222);
}

function fnB(number) {
  console.log('Log during fnB execution ', number);
}

// fnA('A message', fnB);

// fnB(111);

// console.dir(fnB);

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, operation, callback) {
  const result = callback(a, b);
  console.log(operation, result);
}

// calc(2, 3, 'add', function (paramA, paramB) {
//   return paramA + paramB;
// });

// calc(10, 8, 'subsctract', function (paramA, paramB) {
//   return paramA - paramB;
// });

// calc(10, 8, 'multiply', function (paramA, paramB) {
//   return paramA * paramB;
// });

// calc(10, 2, 'divide', function (paramA, paramB) {
//   return paramA / paramB;
// });

// calc(10, 8, 'pow', function (paramA, paramB) {
//   return paramA ** paramB;
// });

let counter = 0;

btn.addEventListener('click', clickCounter);

function clickCounter(event) {
  console.log('click', ++counter);
  const btn = event.target;

  btn.children[0].textContent = counter;
}

// function fetchProducts(url) {
//   return fetch(url).then(response => {
//     return response.json();
//   });
// }

// fetchProducts('https://dummyjson.com/products').then(showProductsList);

// function showProductsList({ products }) {
//   products.forEach((product, idx, arr) => {
//     const li = document.createElement('li');
//     li.textContent = `${idx + 1} - ${product.title}`;
//     productsList.append(li);
//   });
// }

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику колбека.
 */

function each(array, callback) {
  const newArray = [];

  for (const item of array) {
    // const res = callback(item);
    newArray.push(callback(item));
    // console.log('🚀 ~ each ~ res:', res);
  }

  return newArray;
}

console.log([64, 49, 36, 25, 16]);

const result1 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
console.log('🚀 ~ result1:', result1);

const result2 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
console.log('🚀 ~ result2:', result2);

const result3 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
console.log('🚀 ~ result3:', result3);

const result4 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
console.log('🚀 ~ result4:', result4);

const result5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
console.log('🚀 ~ result5:', result5);
