/**
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

const products = [
  {
    id: 13,
    title: 'Bedside Table African Cherry',
    price: 299.99,
    description:
      'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp',
  },
  {
    id: 14,
    title: 'Knoll Saarinen Executive Conference Chair',
    price: 499.99,
    description:
      'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp',
  },
  {
    id: 15,
    title: 'Wooden Bathroom Sink With Mirror',
    price: 799.99,
    description:
      'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp',
  },
  {
    id: 16,
    title: 'Apple',
    price: 1.99,
    description:
      'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp',
  },
  {
    id: 17,
    title: 'Beef Steak',
    price: 12.99,
    description:
      'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp',
  },
  {
    id: 18,
    title: 'Cat Food',
    price: 8.99,
    description:
      'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
    thumbnail:
      'https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp',
  },
];

const container = document.querySelector('.products');
const modalTemlate = document.querySelector('#js-modal-template');
let instance = null;

const createProductsMarkup = products => {
  return products
    .map(product => {
      return `<li class="products-item" id="${product.id}">
        <img class="products-img" src="${product.thumbnail}" alt="${product.title}" />
        <h2 class="products-title">${product.title}</h2>
        <p class="products-price">$ ${product.price}</p>
      </li>`;
    })
    .join('');
};

const handleEscapeClick = event => {
  if (event.code === 'Escape') {
    instance.close(() => {
      document.removeEventListener('keydown', handleEscapeClick);
    });
  }
  // console.log('clicks');
};

const populateModal = (element, { title: caption }) => {
  const img = element.querySelector('img');
  img.src = data.thumbnail;
  img.alt = data.title;
  const title = element.querySelector('h2');
  title.textContent = caption;
  const subtitle = element.querySelector('h3');
  subtitle.textContent = data.price;
  const desc = element.querySelector('p');
  desc.textContent = data.description;

  return element;
};

const handleItemClick = event => {
  const targetEl = event.target;
  if (targetEl.classList.contains('products')) {
    console.log('Stop');
    return;
  }

  const itemEl = targetEl.closest('.products-item');

  const product = products.find(product => product.id === Number(itemEl.id));
  // console.log('product', product);

  // ? Отримання вмісту шаблону
  const cloneEl = modalTemlate.content.cloneNode(true);
  // console.log('🚀 ~ handleItemClick', cloneEl);
  const populatedModal = populateModal(cloneEl, product);
  console.log('🚀 ~ handleItemClick:', populatedModal);

  const modalMarkup = `
    <div class="modal">
        <img
          src="${product.thumbnail}"
          alt="${product.title}"
        />
        <h2>${product.title}</h2>
        <h3>Price: $ ${product.price}</h3>
        <p>${product.description}</p>
      </div>
    `;

  instance = basicLightbox.create(modalMarkup);

  instance.show(() => {
    document.addEventListener('keydown', handleEscapeClick);
  });
};

container.insertAdjacentHTML('beforeend', createProductsMarkup(products));
container.addEventListener('click', handleItemClick);
