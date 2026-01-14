import axios from 'axios';
import '../common.css';

/**
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://thecatapi.com/
 *
 */

const options = {
  baseURL: 'https://api.thecatapi.com/v1',
  method: 'get',
  headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
};

const baseConfig = {
  baseURL: 'https://api.thecatapi.com/v1',
  method: 'get',
  headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
};
const breedsConfig = {
  ...baseConfig,
  url: '/images/search',
  params: {
    breed_ids: 'abys',
  },
};

const fetchCatBreeds = () => {
  return axios({
    ...options,
    url: '/breeds',
  });
};

const fetchBreedById = breedId => {
  // https://api.thecatapi.com/v1/breeds?breed_ids=abys
  return axios(breedsConfig);
};

fetchCatBreeds().then(({ data }) => {
  console.log(data);
});

fetchBreedById('abys').then(({ data }) => {
  console.log(data);
});
