/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// const feedback = Object.create({
//   good: 5,
//   neutral: 10,
//   bad: 3,
// });

console.log(feedback);

// feedback.bad = 100;

let totalFeedback = 0;
// console.log('good' in feedback);
// console.log('normal' in feedback);

// for (const key in feedback) {
//   if (!Object.hasOwn(feedback, key)) continue;
//   // console.log(key);
//   // console.log(feedback.key); //! спроба доступу до ключа з назвою "key"

//   const value = feedback[key];
//   // console.log('🚀 ~ value:', value);
//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   const value = feedback[key];
//   console.log('🚀 ~ value:', value);
// }

// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  totalFeedback += value;
}

// console.log('totalFeedback: ', totalFeedback);

// const entries = Object.entries(feedback);
// console.log('🚀 ~ entries:', entries);
