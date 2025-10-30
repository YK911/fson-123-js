/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('Before');

const str = 'Mango is my best friend';
let updateStr = '';

// debugger;
for (let i = 0; i < str.length; i += 1) {
  const letter = str[i];

  // if (i === 1) {
  //   break;
  // }

  // console.log(letter);
  if (letter === 'g' || letter === 'o') {
    updateStr += letter.toUpperCase();
    continue;
  }

  updateStr += letter;
}
// console.log(updateStr);

// console.log('After');

/**
 * -------------------------------
 */

// console.log("Before");
const min = 0;
const max = str.length - 1;

for (let i = max; i >= min; i -= 1) {
  // console.log(str[i]);
}
// console.log("After");

/**
 * -------------------------------
 */

let a = 10;

// console.log(a);

// for (let i = 0; i < a; i++) {}
// console.log(b);

let w = 1;
// console.log(w++);
// console.log(w);
// console.log(w--);
// console.log(w);

// console.log(++w);
// console.log(w);
// console.log(--w);
// console.log(w);

/**
 * -------------------------------
 */

// console.log("Before while loop");

let counter = 0;
let sum = 0;

while (counter < 10) {
  sum += counter;
  counter++;
}

// console.log(sum);

let element = null;
let text = '';

// do {
//   element = document.querySelector('.desc');
//   text = element.textContent;

//   text = text.split(' ');

//   console.log(text);
// } while (text.length > 100 && element);

// console.log("After while loop");
