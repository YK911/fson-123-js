import '../common.css';

/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/todos
 */

const listEl = document.querySelector('.todo-list');

// const BASE_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(BASE_URL)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // console.log(data);
//     listEl.innerHTML = createTodosMarkup(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

function createTodosMarkup(todos = []) {
  return todos
    .map(
      ({ title, completed, id, userId }) =>
        `<li class="${
          completed ? 'completed' : ''
        }" id="${id}" data-user-id="${userId}">${title}</li>`
    )
    .join('');
}

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = (endpoint = '', urlOptions) => {
  const serachParams = new URLSearchParams(urlOptions);

  return fetch(`${BASE_URL}/${endpoint}?${serachParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

function getTotalResults(selector) {
  const select = document.querySelector(selector);
  const value = select.selectedOptions[0].value;
  return Number(value);
}

const urlOptions = {
  _limit: getTotalResults('select'),
  _sort: 'title',
};

fetchTodos('/todos', urlOptions)
  .then(data => {
    console.log(data);
    listEl.innerHTML = createTodosMarkup(data);
  })
  .catch(error => {
    console.log(error);
  });
