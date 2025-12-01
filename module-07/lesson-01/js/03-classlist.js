/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = '/about';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

linkEl.classList.add('site-nav__link--current');
linkEl.classList.remove('linethrough');
linkEl.classList.replace('active', 'linethrough');
const hasClassActive = linkEl.classList.contains('active');
console.log('🚀 ~ hasClassActive:', hasClassActive);

const modalBtnEl = document.querySelector('.modal  button');
const backdropEl = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('[data-modal-open]');

const toggleModal = () => {
  backdropEl.classList.toggle('is-hidden');
};

modalBtnEl.addEventListener('click', toggleModal);

openModalBtn.addEventListener('click', toggleModal);
