/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */
// console.log([11, 22, 33] === [11, 22, 33]);
// console.log({ x: 1, y: 1 } === { x: 1, y: 1 });

const coords1 = {
  x: 11,
  y: 22,
};

const coords2 = coords1;

// console.log(coords2 === coords1);

coords2.y = 33;
coords2.c = 44;

// console.log(coords1);

/**
 * --------------------------
 */

const arr = [1, 2, 3];
arr.hello = ':)';
console.table(arr);
console.log(arr['hello']);

function foo() {
  console.log('hello');
}

console.log(foo);

foo.newProp = ';)';
console.dir(foo);

console.log(foo.newProp);
