import axios from 'axios';
import '../common.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і отримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

// ? Отримуємо всі елементи DOM-дерева
const breedInput = document.querySelector('#breed-input');
const breedDatalist = document.querySelector('#breeds-list');
const searchFrom = document.querySelector('#search-form');
const cardsContainer = document.querySelector('#cat-card');
const loader = document.querySelector('#loader');

// ? Отримуємо дані від бекенда
const fetchCatBreeds = () => {
  return axios.get('/breeds');
};

const fetchBreedInfo = breedId => {
  const options = {
    params: {
      breed_ids: breedId,
      api_key:
        'live_s4ECJuK4F4s9ao5v0KfsAcUbtbRgzBfFQKziJa00bgnvJKUQIrcCkAKgZWgABrjl',
    },
  };

  return axios.get(`/images/search`, options);
};

// ? Заповнюємо список datalist даними про породи котів
const populateDatalist = breeds => {
  // console.log("🚀 ~ populateDatalist ~ breeds:", breeds)

  breedDatalist.innerHTML = '';
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.name;
    option.dataset.id = breed.id;
    breedDatalist.appendChild(option);
  });
};

// ? Ініціалізує запит на сервер та відображення списку порід
const init = () => {
  loader.classList.remove('hidden');
  fetchCatBreeds()
    .then(({ data }) => {
      // console.log('🚀 ~ init ~ data:', data);
      populateDatalist(data);
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
};

// ? Рендер інформації про кота та рендер помилки
const renderCatCard = ({ imagePath, title }) => {
  cardsContainer.innerHTML = `
  <div class="card">
    <img class="card-image" src="${imagePath}" alt="${title}" width="370" height="334"/>
    <div class="card-body">
      <h2 class="card-title">${title}</h2>
    </div>
  </div>`;
};

const renderError = message => {
  cardsContainer.innerHTML = `<div class="error">${message}</div>`;
};

// ? Функція обробник форми пошуку
const onSearchFormSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;

  const selectedBreed = Array.from(breedDatalist.options).find(
    option => option.value === breedInput.value
  );
  // console.log('🚀 ~ onSearchFormSubmit:', selectedBreed);

  if (!selectedBreed) {
    renderError('Виберіть існуючу породу');
    return;
  }

  const breedId = selectedBreed.dataset.id;
  // console.log('🚀 ~ onSearchFormSubmit:', breedId);
  loader.classList.remove('hidden'); // show loader

  fetchBreedInfo(breedId)
    .then(({ data }) => {
      console.log('🚀 ~ fetchBreedInfo:', data[0].breeds[0].name);
      console.log('🚀 ~ fetchBreedInfo:', data[0].url);

      if (data.length > 0) {
        renderCatCard({
          title: data[0].breeds[0].name,
          imagePath: data[0].url,
        });
      } else {
        renderError('Вибачте, зображення не знайдено');
      }
    })
    .catch(() => {
      renderError('Вибачте, помилка завантаження зображення');
    })
    .finally(() => {
      form.reset();
      loader.classList.add('hidden'); // hide loader
    });
};

// TODO: запуск всіх необхідних функцій
init();
searchFrom.addEventListener('submit', onSearchFormSubmit);
