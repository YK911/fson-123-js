/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/**
 * Пишемо функцію для створення розмітки колорпікера
 */
const elements = options.map(option => {
  const btnEl = document.createElement('button');
  btnEl.type = 'button';
  btnEl.setAttribute('class', 'color-picker__option');
  btnEl.textContent = option.label;
  btnEl.style.backgroundColor = option.color;

  return btnEl;
});

console.log(elements);

colorPickerContainerEl.append(...elements);
