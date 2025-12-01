/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const heroRefs = {
  imageEl: document.querySelector('.hero__image'),
  titleEl: document.querySelector('.hero__title'),
};
const altAttr = heroRefs.imageEl.alt;
// console.log('🚀 ~ altAttr:', altAttr);
heroRefs.imageEl.alt = 'Super funny cat';

// setTimeout(() => {
//   heroRefs.imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// }, 2000);

// console.dir(heroRefs.imageEl.attributes.width.value);

// heroRefs.titleEl.textContent += ` ${heroRefs.imageEl.attributes.width.value}`;
// console.log(heroRefs.titleEl.innerHTML);
// console.log(heroRefs.titleEl.textContent);
// heroRefs.titleEl.outerHTML = `<script>${setTimeout(
//   alert('Hey'),
//   3000
// )}</script>`;

// window.document.body.innerHTML = 'oooooops';

/**
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const inputEl = document.querySelector('.js-input');
const res1 = inputEl.getAttribute('type');
console.log('🚀 ~ res1:', res1);

inputEl.setAttribute('type', 'password');
inputEl.removeAttribute('name');

const hasNameAttr = inputEl.hasAttribute('name');
console.log('🚀 ~ hasNameAttr:', hasNameAttr);

/**
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');
// console.log(actions[2].dataset);

// const create = actions[2].dataset.actionBtn;
// console.log('🚀 ~ create:', create);
