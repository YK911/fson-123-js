import axios from 'axios';

// ? Project styles
import '../common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Використовуємо https://dummyjson.com/docs/recipes та створимо сторінку перегляду рецептів
 *
 * Переписуємо на async/await
 */

const recipesContainerEl = document.querySelector('[data-container="recipes"]');
const categoryEl = document.querySelector('[data-container="recipes"]');
const searchForm = document.querySelector('#searchForm');

const RESIPES_URL = 'https://dummyjson.com/recipes?limit=8';
const SEARCH_URL = 'https://dummyjson.com/recipes/search';
const MEALTYPE_URL = 'https://dummyjson.com/recipes/meal-type/';

const showError = error => {
  console.log(error.message);
};

const fetchRecipes = async () => {
  const recipesData = await axios.get(RESIPES_URL);
  const {
    data: { recipes },
  } = recipesData;

  return recipes;
};
const searchRecipes = async (query = '') => {
  const response = await axios.get(SEARCH_URL, {
    params: {
      q: query,
    },
  });

  if (response.data.total === 0) {
    throw new Error('❌ No recipes found');
  }

  return response.data.recipes;
};
const searchRecipesByCategory = async (category = '') => {
  const response = await axios.get(`${SEARCH_URL}+${category}`);

  if (response.data.total === 0) {
    throw new Error('❌ No recipes found');
  }

  return response.data.recipes;
};

const createRecipesMarkup = (recipes = []) => {
  let firstPart = null;
  let secondPart = null;
  if (recipes.length > 4) {
    firstPart = recipes.slice(0, 4);
    secondPart = recipes.slice(4);
  } else {
    firstPart = recipes;
  }

  const markup1 = firstPart
    .map(({ id, image, name, cookTimeMinutes, caloriesPerServing }) => {
      return `
      <div class="col">
        <div class="card" id="${id}">
          <img class="card-img-top" src="${image}"  alt="${name}">
          <div class="card-body">
            <div>
              <h5 class="card-title">${name}</h5>
              <p>${cookTimeMinutes}</p>
            </div>
            <small>~ ${caloriesPerServing} cals</small>
            <button class="btn btn-primary" type="button">Learn more</button>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  const markup2 = secondPart
    ? secondPart
        .map(({ id, image, name, cookTimeMinutes, caloriesPerServing }) => {
          return `
      <div class="col">
        <div class="card" id="${id}">
          <img class="card-img-top" src="${image}"  alt="${name}">
          <div class="card-body">
            <div>
              <h5 class="card-title">${name}</h5>
              <p>${cookTimeMinutes}</p>
            </div>
            <small>~ ${caloriesPerServing} cals</small>
            <button class="btn btn-primary" type="button">Learn more</button>
          </div>
        </div>
      </div>
    `;
        })
        .join('')
    : '';

  return [markup1, markup2];
};

const onSearchSubmit = event => {
  event.preventDefault();
  const form = event.target;

  const { searchQuery } = form.elements;

  if (searchQuery.value.trim() === '') {
    console.log('Empty input');
    return;
  }

  searchRecipes(searchQuery.value)
    .then(recipes => {
      console.log(recipes);
      recipesContainerEl.innerHTML = '';

      recipesContainerEl.insertAdjacentHTML(
        'beforeend',
        createRecipesMarkup(recipes)
      );
    })
    .catch(error => {
      showError(error);
    })
    .finally(() => {
      form.reset();
    });
};
const onCategoryChange = () => {};

const init = async () => {
  recipesContainerEl.innerHTML = '';
  try {
    const recipes = await fetchRecipes();
    const markup = createRecipesMarkup(recipes);

    const cardSet = markup
      .map(item => `<div class="row">${item}</div>`)
      .join('');

    recipesContainerEl.insertAdjacentHTML('beforeend', cardSet);
  } catch (error) {
    showError();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
searchForm.addEventListener('submit', onSearchSubmit);
categoryEl.addEventListener('change', onCategoryChange);
