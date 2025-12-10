/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

const product = {
  name: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};

function displayProductInfo({
  name,
  price,
  category,
  details: { brand, color, weight },
}) {
  console.log(`Назва товару: ${name}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log('Деталі:');
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

displayProductInfo(product);

// ? Pattern object with params
function showProductInfo({ product, price, type }) {
  console.log(`${product} cost ${price}, type: ${type}`);
}

const options = {
  type: 'Electronics',
  product: 'Smart TV',
  price: 25000,
};

showProductInfo(options);
