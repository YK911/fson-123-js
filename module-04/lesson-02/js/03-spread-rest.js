/**
 * Синтаксис spread і rest (синтаксичний цукор)
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
const numbers1 = [444, 555];
const numbers = [111, ...numbers1, 222, 333, ...[888, 777]];
// console.log(numbers);

/**
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

// let min = temps[0];

// for (let i = 0; i < temps.length; i++) {
//   const temp = temps[i];
//   if (temp < min) {
//     min = temp;
//   }
// }

// console.log(min);

const minTemp = Math.min(...temps);
// console.log('🚀 ~ minTemp:', minTemp);
const maxTemp = Math.max(...temps);
// console.log('🚀 ~ maxTemp:', maxTemp);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

const c = JSON.parse(JSON.stringify(a));
// console.log('🚀 ~ c:', c);

c[0].x = 100;
// console.log(c);

a[2].z = 'qwe';

b[0].x = 10;

// console.log('a: ', a);
// console.log('b: ', b);
// console.log(a === b);

/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {
  ...objA,
  ...objB,
  f: 66,
};

// console.log(objC);

// const d = {
//   x: 11,
//   y: 22,
//   f: 33,
//   y: 44,
// };

// console.log(d);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  mainTheme: { theme: 'light' },
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
  mainTheme: { theme: 'colorized' },
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
  mainTheme: { ...defaultSettings.mainTheme, ...userSettings.mainTheme },
};

// console.log(finalSettings);

function meanTemp(...args) {
  // let total = 0;
  // console.log(args);

  // for (const arg in arguments) {
  //   total += Number(arg);
  // }

  // return total / arguments.length;

  return args.reduce((acc, temp) => (acc += temp), 0) / args.length;
}

// const res = meanTemp(1, 10, 21, 32, -1);
// console.log('🚀 ~ res:', res);

function makeSmth(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}
// makeSmth(11, 22, 'asd', 'qwe', 'zxc');
