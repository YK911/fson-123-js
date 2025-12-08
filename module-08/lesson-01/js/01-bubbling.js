/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на якому зареєстровано слухач події
 */

const parentEl = document.querySelector('#parent');
const childEl = document.querySelector('#child');
const innerChildEl = document.querySelector('#inner-child');

const options = {
  capture: true,
};

parentEl.addEventListener('click', onParentClick, false);
// childEl.addEventListener('click', onChildClick, false);
// innerChildEl.addEventListener('click', onInnerChildClick, false);

function onParentClick(event) {
  // console.log('On PARENT click');

  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
}
function onChildClick(event) {
  // console.log('On CHILD click');
  // console.log('target', event.target);
  // console.log('currentTarget', event.currentTarget);
}
function onInnerChildClick(event) {
  // console.log('On INNER CHILD click');

  // console.log('target', event.target);
  // console.log('currentTarget', event.currentTarget);
  console.log(event.target === event.currentTarget);
}
