/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

const userProps = Object.keys(user);
console.log('🚀 ~ userProps:', userProps);

for (const prop of userProps) {
  console.log(`${prop} : ${user[prop]}`);
}

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};

const salariesEmp = Object.values(salaries);
console.log('🚀 ~ salariesEmp:', salariesEmp);

let totalSalary = 0;

if (salariesEmp.length === 0) {
  console.warn('Employees salary is empty');
} else {
  for (const sum of salariesEmp) {
    totalSalary += sum;
  }
}

console.log(totalSalary);
