/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.textContent = 'My beautiful title';
titleEl.classList.add('hero-title');
console.log(titleEl);

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 400;

const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl);
// heroEl.append(imageEl);
// heroEl.prepend(imageEl);
heroEl.append(titleEl, imageEl);

/**
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navlinkEl = document.createElement('a');
navlinkEl.href = '/blog';
navlinkEl.textContent = 'Blog';
navlinkEl.classList.add('site-nav__link');
navItemEl.append(navlinkEl);

const navEl = document.querySelector('.site-nav');
navEl.append(navItemEl);

const links = ['Home', 'Blog', 'Contacts', 'Reviews'];
const navLinks = document.querySelector('.links');
const fragmentEl = document.createDocumentFragment();

links.forEach(link => {
  const linkEl = document.createElement('a');
  linkEl.textContent = link;
  fragmentEl.append(linkEl);
});

navLinks.append(fragmentEl);
