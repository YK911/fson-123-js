/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */
// document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  console.log(event.key);
  console.log(event.code);
}
/**
 * Обробка комбінацій клавіш
 */

document.addEventListener('keydown', removeCombinations);

function removeCombinations(event) {
  // console.log(event.code);
  // console.log(event.metaKey);
  if (event.metaKey && event.code === 'KeyS') {
    console.log('Cancel saving');
    event.preventDefault();
  }

  if (event.metaKey && event.code === 'KeyC') {
    console.log('Cancel copy');
    event.preventDefault();
  }
}
