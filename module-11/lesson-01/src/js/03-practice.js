import { BASE_URL } from './config';
import '../common.css';

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

// 'https://dummyjson.com/products/search?q=phone';

function fetchProducts(searchQuery = 'phone') {
  const q = new URLSearchParams({
    q: searchQuery,
  });

  return fetch(`${BASE_URL}?${q}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  const { query } = form.elements;
  const searchQuery = query.value.trim();

  if (searchQuery.length === 0) {
    console.warn('Please, fill search input');
    return;
  }

  fetchProducts(searchQuery)
    .then(({ total, products }) => {
      if (total === 0) {
        throw new Error();
      }

      renderProducts(products);
    })
    .catch(onFetchError)
    .finally(() => {
      form.reset();
    });
});

function renderProducts(products) {
  const markup = products
    .map(
      ({ title, description }) => `<li class="list-group-item">
      <h3>${title}</h3>
      <p>${description}</p>
      </li>`
    )
    .join('');

  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, щось пішло не так і ми не знайшли ваш товар!');
}
