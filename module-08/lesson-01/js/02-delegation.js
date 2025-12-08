/**
 * Додавання слухача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');
const elements = [...container.children];
// console.log('🚀 ~ elements:', elements);
// elements.forEach(element => {
//   element.addEventListener('click', onBoxClick);
// });

function onBoxClick(event) {
  const boxColor = event.currentTarget.dataset.color;
  console.log('🚀 ~ onBoxClick ~ boxColor:', boxColor);
}

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
container.addEventListener('click', handleBoxClick);

function handleBoxClick(event) {
  const isParent = event.target.classList.contains('container');
  console.log('🚀 ~ handleBoxClick ~ isParent:', isParent);
  // if (event.target === event.currentTarget) {
  if (isParent) {
    console.warn('Click into container');
    return;
  }

  const currentColor = event.target.dataset.color;
  console.log('🚀 ~ handleBoxClick ~ currentColor:', currentColor);
  document.querySelector('.outut').textContent = currentColor;
}
