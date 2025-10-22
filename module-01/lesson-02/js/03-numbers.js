/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

// const paragraphElementWidth = paragraph.style.width;
// console.log('🚀 ~ paragraphElementWidth:', paragraphElementWidth);

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
elementWidth += 20;
elementWidth = elementWidth + 'px';

// console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74.54px';
elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

console.log(Math.SQRT2);
console.log(Math.abs(-5));

const value = 27.2;

const res1 = Math.ceil(value);
console.log('🚀 ~ res1:', res1);

const res2 = Math.floor(value);
console.log('🚀 ~ res2:', res2);

const res3 = Math.round(value);
console.log('🚀 ~ res3:', res3);

const time = 72;

const hours = Math.floor(time / 60);
console.log('🚀 ~ hours:', hours);

const minutes = time % 60;
console.log('🚀 ~ minutes:', minutes);

const displayTime = `${hours}:${minutes}`;
console.log('🚀 ~ displayTime:', displayTime);
