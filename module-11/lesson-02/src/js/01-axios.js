import axios from 'axios';
import { fetchPosts, fetchTodos } from './service-api';
import './config';
import '../common.css';

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const list = document.querySelector('.todos-list');

// axios.defaults.baseURL = BASE_URL;

// axios
//   .get('/todos')
//   .then(({ data }) => {
//     console.log(data);
//     const markup = data
//       .map(({ title, id, userId }) => {
//         return `<li id="${id}" data-user-id="${userId}">${title}</li>`;
//       })
//       .join('');

//     list.insertAdjacentHTML('beforeend', markup);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // Рендер елементів в DOM (map і insertAdjacentHTML)
//   })
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Всередині функції запит, зовні обробка
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

fetchTodos()
  .then(({ data }) => {
    console.log(data);
    const markup = data
      .map(({ title, id, userId }) => {
        return `<li id="${id}" data-user-id="${userId}">${title}</li>`;
      })
      .join('');

    list.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    console.log(error);
  });

fetchPosts()
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
