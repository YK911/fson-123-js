/**
 * Об'єкти
 *
 * - Обчислювальні властивості
 * - Короткі властивості
 */

const username = 'Mango';
const email = 'mango@mail.com';

// const credentials = {
//   username: username,
//   email: email,
// };

const credentials = {
  username,
  email,
  age: 18,
};

// console.log(age);

console.log(credentials);
console.log(credentials.username);
console.log(credentials.email);

/**
 * -------------------------
 */

const selector = 'form[name="color"]';
const fromEl = document.querySelector(selector);

const colorPickerData = {
  color: 'tomato',
  backgroundColor: 'lightblue',
  borderColor: 'lightgreen',
};

fromEl.onchange = chooseColor;

function chooseColor(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const currentInputValue = form.elements.property.value;
  // console.log('🚀 ~ currentInputValue:', currentInputValue);

  const outputValue = colorPickerData[currentInputValue];
  console.log('🚀 ~ outputValue:', outputValue);
  output.children[0].style.color = outputValue;
  output.children[0].textContent = outputValue;
}

const inputName = 'color';

// console.log(colorPickerData);
const colorData = colorPickerData[inputName];
// console.log('🚀 ~ colorData:', colorData);
