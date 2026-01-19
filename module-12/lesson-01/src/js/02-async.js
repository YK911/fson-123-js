import axios from 'axios';
import '../common.css';

/**
 * Синтаксис async/await
 * try...catch
 */

// const fetchTodos = () => {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.data);
// };

const user = {
  name: 'Mango',
  async showName() {
    console.log(this.name);
    const result = await '5';
  },
};

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchTodos = async () => {
  const modalEl = document.querySelector('.modal');
  try {
    const todoResponse = await axios.get(TODO_URL);
    const userResponse = await axios.get(USERS_URL);

    console.log(todoResponse);
    console.log(userResponse);
  } catch ({ message }) {
    console.log(message);

    modalEl.textContent = message;
    modalEl.classList.add('show');
  } finally {
    setTimeout(() => {
      modalEl.classList.remove('show');
    }, 2000);
  }
};

fetchTodos();

function showInfo() {
  const title = document.getElementsByTagName('h1');
  title[0].children[0].textContent = 'Work independets';
}

showInfo();

async function getTodos() {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data);
}

fetchTodos()
  .then(data => console.log('Todos:', data))
  .catch(error => console.error('Помилка отримання Todos:', error));

async function getImagesByQuery() {
  return axios.get('/images');
}
