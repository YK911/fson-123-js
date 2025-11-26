/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// ? Процедурне програмування

const salary = 10_000;
const overtime = 10;
const rate = 20;

function getWege(salary, overtime, rate) {
  return salary + overtime * rate;
}

const wage = getWege(salary, overtime, rate);
// console.log('🚀 ~ wage:', wage);

// ? Обʼєктно-орієнтоване програмування

const employee = {
  baseSalary: 10_000,
  overtime: 10,
  rate: 20,

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

const wageNew = employee.getWage();
// console.log('🚀 ~ wageNew:', wageNew);

class Car {
  // brand; // public property
  // model; // public property
  // power; // public property
  // price; // public property
  // color; // public property

  #price; // private property
  static #createAutoCounter = 0;

  constructor(brand, model, power, price, color, types = []) {
    // brand = 'BMW'
    // model = 'X5'
    // power = 300

    this.brand = brand;
    this.model = model;
    this.power = power;
    this.#price = price;
    this.color = color;
    this.types = types;

    Car.#createAutoCounter += 1;
  }

  applyDiscount(discount) {
    this.price = this.price * (1 - discount);
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice < 0) {
      alert('Wrong price!!! >:(');
      return;
    }

    this.#price = newPrice;
  }

  static showTotalAuto() {
    console.log(Car.createAutoCounter);
  }
}

// ! CREATE OBJECT

const autoBMW = new Car('BMW', 'X5', 300, 10_000, 'black'); // {}
// console.table(autoBMW);
autoBMW.color = 'red';
// console.log('🚀 ~ autoBMW:', autoBMW);

const autoAUDI = new Car('Audi', 'Q7', 330, 12_000, 'blue'); // {}
// console.table(autoAUDI);

// Car.showTotalAuto();

const autoNissan = new Car('Nissan', 'Maxima', 190, 15_000, 'red'); // {}

// Car.showTotalAuto();

// autoAUDI.applyDiscount(0.1);
// console.log(autoBMW.price);
autoBMW.price = 1_000;
// console.log(autoBMW);

// console.table(autoBMW);
// console.log(autoBMW.price);
// autoAUDI.setPrice(18_000);
// console.log(autoAUDI.price);

// const autoReno = {
//   brand: 'Reno',
//   model: 'Megan',
//   power: 100,
//   price: 8_000,
//   color: 'white',
// };
const autoPeugeot = {
  brand: 'Peugeot',
  model: '407',
  power: 130,
  price: 9_000,
  color: 'pearl balck',

  price: 19_000,
};
autoPeugeot.price; // TODO: operation READ
autoPeugeot.price = 21_000; // TODO: operation WRITE
