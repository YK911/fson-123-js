import images from './js/data.json';
import appRefs from './js/refs';
import { renderCards } from './js/render-functions';
import imagePath from './img/vite-logo.png';

import 'bootstrap/dist/css/bootstrap.css';

console.log('🚀 ~ imagePath:', imagePath);

const { cardTemplate, list } = appRefs;

const templates = images.map(({ original, description }) => {
  const clone = cardTemplate.cloneNode(true);
  const template = clone.content;
  const img = template.querySelector('.img-fluid');
  img.src = original;
  img.alt = description;

  return template;
});

renderCards(templates, list);

const markup = `<img src="${imagePath}" alt="" />`;

document.body.insertAdjacentHTML('beforeend', markup);
