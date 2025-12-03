/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * синій квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector('.js-click');
const box = document.querySelector('.js-box');

// clickMe.onclick = (e) => {}
// clickMe.onclick = (evt) => {}
// let count = 0;
// clickMe.onclick = event => {
//   count++;
//   console.log(`Clicked: ${count}`);
//   console.log(`Clicked`);
// };

// clickMe.onclick = event => {
//   console.log(`Clicked: ${count}`);
//   console.log(`Worked`);
// };

// const firstBtnHandler = event => console.log(`First handler`);
// const secondBtnHandler = event => console.log(`Second handler`);

// clickMe.onclick = () => {
//   firstBtnHandler();
//   secondBtnHandler();
// };

// clickMe.onclick = null || '';

// const counter = {
//   count: 0,
//   updateCount() {},
//   updateCount: function (params) {},
//   updateCount: params => { },
//   onclick: null
// };

// const searchQuery = 'cats';

// function handlerBtnClick(event, search) {
//   console.log(`Request to server with: ${search}`);
// }

// clickMe.addEventListener('click', event => {
//   handlerBtnClick(event, searchQuery);
// });

// clickMe.addEventListener('click', handlerBtnClick);

// clickMe.removeEventListener('click', handlerBtnClick);

// const handlerBtn = params => {};

clickMe.addEventListener('click', handlerBtn);

let position = 0;
const shift = 50;
function handlerBtn(event) {
  console.log(event);
  console.log(event.target);

  position += shift;
  box.style.transform = `translate(${position}px, ${position}px)`;
}
