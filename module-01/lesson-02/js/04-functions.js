/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// function handleClick(event, num) {
//   // let event = 'click'
//   // let num = 5
//   console.log(event);
//   console.log(num);

//   // return (num += 125);

//   // return undefined;
// }

// const functionResult = handleClick('click', 5); //? рядок 'click' - це аргумент функції
// console.log('🚀 ~ functionResult:', functionResult);

// function fn1() {
//   //
//   console.log('Hello');

//   //return undefined
// }

// const res1 = fn1();
// console.log('🚀 ~ res1:', res1);

/* ================= */

let counter = 0;

function handleClick(event) {
  // let counter = 100;
  // let event = {};

  counter += 1;
  count.textContent = counter;

  // return undefined;
}

clickBtn.onclick = handleClick;

clickBtn.onmouseleave = function () {
  clickBtn.style.background = '#e2e';
};

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  const normalizedWeight = Number(replaceToDot(weight));
  const normalizedHeight = Number(replaceToDot(height));

  // const bmi = weight / height ** 2;
  // const powHeight = Math.pow(height, 2);

  const bmi = normalizedWeight / normalizedHeight ** 2;

  // return Math.round(bmi * 10) / 10;

  return roundDecimal(bmi, 1);
}

function replaceToDot(value) {
  return value.replace(',', '.');
}

function roundDecimal(value, num = 1) {
  return Math.round(value * 10 ** num) / 10 ** num;
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
