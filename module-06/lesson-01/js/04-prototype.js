/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
};

const dog = Object.create(animal);

// console.log(dog);

// animal.__proto__ = {
//   voice() {
//     console.log(this);
//   },
// };

// console.log('🚀 ~ animal:', animal);
// console.log(animal.__proto__);

// animal.voice();

dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   // console.log(key);
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//     console.log(dog[key]);
//   }
// }

// const dogKeys = Object.keys(dog);
// console.log('🚀 ~ dogKeys:', dogKeys);

/**
 * ----------------------------------------
 */
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

console.log(objA.hasOwnProperty('x'));
console.log(objA.x);
