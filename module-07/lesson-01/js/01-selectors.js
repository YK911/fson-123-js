/**
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

let selector = '[data-title="content"]';

const idEl = document.querySelector(selector);

// console.log('🚀 ~ idEl:', idEl);
// console.dir(idEl);
const classEl = document.querySelector('.js-magic-btn');
// console.log('🚀 ~ classEl:', classEl);

const dataAttrEl = document.querySelector(selector);
// console.log('🚀 ~ dataAttrEl:', dataAttrEl);

const tagNameEl = document.querySelector('li');
// console.log('🚀 ~ tagNameEl:', tagNameEl);

const firstChildEl = document.querySelector('ul > li:first-child > a');
// console.log('🚀 ~ firstChildEl:', firstChildEl);

const onlyOneEl = document.querySelector('.site-nav__link');
// console.log('🚀 ~ onlyOneEl:', onlyOneEl);

const heroSectionEl = document.getElementById('hero');
// console.log('🚀 ~ heroSectionEl:', heroSectionEl);

const res = document.getElementsByClassName('link');
// console.log('🚀 ~ res:', res);

// const allLinks = [...document.querySelectorAll('.site-nav__link')];
const allLinks = Array.from(document.querySelectorAll('.site-nav__link'));
console.log('🚀 ~ allLinks:', allLinks);

const refs = {
  heroSection: document.querySelector('section'),
  allLinks: document.querySelectorAll('.site-nav__link'),
};
