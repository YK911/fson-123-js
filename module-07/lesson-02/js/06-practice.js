/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: 'Audi',
    type: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const elements = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

const createCarsMarkup = cars => {
  return cars
    .map(auto => {
      return `<div class="card" id="${auto.id}">
        <img
          class="card-img-top"
          src="${auto.img}"
          alt="${auto.car} ${auto.type}"
        />
        <div class="card-header">
          <div class="row">
            <div class="col"><p class="h4">${auto.car}</p></div>
            <div class="col"><p class="h4">${auto.type}</p></div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">${auto.price}</h5>
        </div>
      </div>`;
    })
    .join('');
};

const initRender = () => {
  elements.container.insertAdjacentHTML('beforeend', createCarsMarkup(cars));
};

const handleSearch = event => {
  event.preventDefault();
  const form = event.target;
  const searchValue = form.elements.query.value.trim().toLowerCase();
  const currentOption = form.elements.options.selectedOptions[0].value;

  // console.log('🚀  ~ searchValue:', searchValue);
  // console.log('🚀  ~ currentOption:', currentOption);

  elements.container.innerHTML = '';
  const result = cars
    .filter(car => {
      return car[currentOption].toLowerCase().includes(searchValue);
    })
    .toSorted((a, b) => a[currentOption].localeCompare(b[currentOption]));

  elements.container.insertAdjacentHTML('beforeend', createCarsMarkup(result));

  form.reset();
};

initRender();
elements.form.addEventListener('submit', handleSearch);
