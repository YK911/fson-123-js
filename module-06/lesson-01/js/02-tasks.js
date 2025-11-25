function foo() {
  console.log('foo -> this', this);
}

// foo(); // Який this ???

/**
 * -------------------------
 */
const book = {
  title: 'React for beginners',

  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  },
};

// book.showThis(); // Який this ???

const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    // return this.stones.reduce((acc, item) => {
    //   if (item.name === stoneName) {
    //     acc += item.price * item.quantity;
    //   }

    //   return acc;
    // }, 0);

    const searchedStone = this.stones.find(stone => {
      return stone.name === stoneName;
    });

    return searchedStone?.price * searchedStone?.quantity;
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600

function calcStonePrice(stoneName) {
  const search = this?.stones.find(stone => stone.name === stoneName);

  if (!search) return null;

  return search?.price * search.quantity;
}

chopShop.calculatePrice = calcStonePrice;

const res = chopShop.calculatePrice('Diamond');
// console.log('🚀 ~ res:', res);
