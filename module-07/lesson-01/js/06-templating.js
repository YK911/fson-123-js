/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');

// console.log(titleEl.innerHTML);
// console.log(titleEl.textContent);
titleEl.innerHTML = 'Main page <i>heading</i>';

// const ingredients = ['🍑', '🍌', '🍇', '🥒', '🍆', '🍋'];
// const listEl = document.querySelector('.ingredients-list');
// ingredients.forEach((item, idx) => {
//   setTimeout(() => {
//     listEl.innerHTML += `<li>${item}</li>`;
//   }, 1000 * (idx + 1));
// });

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
const ingredients = ['🍑', '🍌', '🍇', '🥒', '🍆', '🍋'];
const listEl = document.querySelector('.ingredients-list');
const markup = ingredients
  .map(
    item => `
  <li>${item}</li>
  `
  )
  .join('');
console.log('🚀 ~ markup:', markup);

listEl.insertAdjacentHTML('beforeend', markup);
