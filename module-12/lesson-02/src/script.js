import axios from 'axios';
import { API_KEY, BASE_URL, pageSize } from './js/config';
import { searchForm, articlesContainer, loadMoreBtn, loader } from './js/refs';
import './scss/styles.scss';
/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо лоадер поки йде запит
 */
const totalLimit = 100;
let page = 7;
let searchQuery = null;

searchForm.addEventListener('submit', handleSearchForm);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);

async function fetchArticles(q, page) {
  const reqParams = {
    q,
    page,
    pageSize,
    apiKey: API_KEY,
  };

  // Show loader
  loader.classList.remove('hidden');

  try {
    const { data } = await axios.get(BASE_URL, {
      params: reqParams,
    });
    return data.articles;
  } catch (error) {
    console.log(`Error: ${error.message}`);

    return [];
  } finally {
    // Hide loader
    loader.classList.add('hidden');
  }
}

async function handleSearchForm(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const {
    query: { value: q },
  } = form.elements;

  searchQuery = q.trim();

  if (searchQuery === '') return;

  page = 7;
  articlesContainer.innerHTML = '';
  loadMoreBtn.classList.add('hidden');

  const articles = await fetchArticles(searchQuery, page);
  renderArticles(articles);

  form.reset();
}

async function handleLoadMoreClick() {
  page += 1;

  // Перевіряємо чи це не кінець колекції
  if (pageSize * page >= totalLimit) {
    console.log("It's last page");
    loadMoreBtn.classList.add('hidden');
    return;
  }

  const articles = await fetchArticles(searchQuery, page);
  renderArticles(articles);
}

function renderArticles(articles) {
  if (!articles || articles.length === 0) {
    console.log('Nothing was found!');
    return;
  }

  const markup = articles
    .map(({ url, urlToImage, title, author, description }) => {
      return `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${
              urlToImage ||
              'https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=667eea&gradientTo=764ba2&gradientAngle=135&f=png'
            }" alt="" width="480">
            <h2>${title}</h2>
            <p>Posted by: ${author || 'Unknown'}</p>
            <p>${description || 'No description available.'}</p>
          </article>
        </a>
      </li>
    `;
    })
    .join(' ');

  articlesContainer.insertAdjacentHTML('beforeend', markup);
  loadMoreBtn.classList.remove('hidden');
}
