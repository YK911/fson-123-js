// const userData = {
//   key1: 'Mango',
//   key2: 2,
//   key3: true,
//   key4: ['value1', 'value2', 'value3', 'value4'],
//   key5: {
//     innerKey: 'mango@mail.com',
//   },
//   key6: null,
//   showEmail() {
//     console.log(this.key5.innerKey);
//   },
// };
// const userData = '{ "name" }';
const userData = '{"name": "Mango", "age": "28" }';

try {
  const json = JSON.parse(userData, null, 2);
  if (!json.name) {
    // console.log('inside if statement');

    throw new Error('Property name is missing ☹️');
  }
} catch (err) {
  // console.log('name', err.message);
  // console.log('message', err.message);
  // console.log('message', err.stack);
  // alert(err.message);
} finally {
  // console.warn('Execute without depence of try or catch');
}

// console.log('after try...catch');

const error = new Error('Oooops, thomething happens');
// console.log('🚀 ~ error:', error.message);
const syntaxErr = new SyntaxError('Some syntax error text...');
// console.log('🚀 ~ syntaxErr:', syntaxErr.message);
const refErr = new ReferenceError('Some reference error text...');
// console.log('🚀 ~ syntaxErr:', refErr.message);

/**
 * LocalStorage
 */

const LS_KEY = 'Array of names';
const names = ['Alice', 'Kate', 'Emma'];
const LS_THEME = 'theme settighs';
const themeOptions = {
  currentTheme: 'light',
  showNotifications: false,
  showSidebar: true,
};

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

save(LS_KEY, names);
save(LS_THEME, themeOptions);
/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
const load = key => {
  try {
    const lsData = JSON.parse(localStorage.getItem(key));
    console.log('🚀 ~ lsData:', lsData);
    lsData.map(name => {
      console.log(name);
    });
  } catch (error) {
    console.log(error);
  }
};

load(LS_KEY);

/**
 * Видалення
 */

setTimeout(() => {
  localStorage.removeItem(LS_KEY);
  localStorage.removeItem('Some names');
}, 5000);

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

localStorage.setItem('fn', add);
const fnAdd = localStorage.getItem('fn');
console.log('🚀 ~ fnAdd:', fnAdd);
// fnAdd();

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

localStorage.setItem('calculator', calculator);
const calculatorObj = localStorage.getItem('calculator');
console.log('🚀 ~ calculatorObj:', calculatorObj);

localStorage.clear();
