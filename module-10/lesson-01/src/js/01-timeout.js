import '../common.css';

/**
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До виклику setTimeout');

// const intervalId1 = setTimeout(
//   (a, b) => {
//     // console.log('1 - Всередині зворотного виклику для setTimeout');
//   },
//   2000,
//   'Hello',
//   true
// );

const callbackFn = () => {
  // console.log('2 - Всередині зворотного виклику для setTimeout');
};

// const intervalId2 = setTimeout(callbackFn, 1000);

// console.log('Після виклику setTimeout');

// console.log(intervalId1, intervalId2);

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};

// const intervalId = setTimeout(logger, 2000, 2000);

// const isTrue = Math.random() > 0.5;
// console.log('🚀 ~ isTrue:', isTrue);

// if (isTrue) {
//   clearTimeout(intervalId);
// }

/**
 * Можливість передати параметри для колбеку
 */
const id = setTimeout(
  data => {
    const [name, country] = data;
    console.log(`Hello, my name is ${name}, I'm from ${country}`);
  },
  1000,
  ['Peter', 'Ukraine']
);
