/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде повертати повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items = []) {
  // arguments = [['Mango', 'Poly', 'Ajax']]
  // items = ['Mango', 'Poly', 'Ajax']
  let output = '';
  // let counter = 1;

  for (let i = 0; i < items.length; i++) {
    output += `${i + 1} - ${items[i]}\n`;
  }

  // for (const item of items) {
  //   output += `${counter} - ${item} \n`;
  //   counter += 1;
  // }

  return output;

  // return undefined
}

const res1 = logItems(['Mango', 'Poly', 'Ajax']);
// console.log(res1);
const res2 = logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// console.log(res2);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  // let names
  names = names.split(',');
  phones = phones.split(',');

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const phone = phones[i];

    console.log(`📱 - ${name}: ${phone}`);
  }
}

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatTime(minutes) {
  // const hours = Number.parseInt(minutes / 60);
  const days = Math.floor(Math.floor(minutes / 60) / 24);
  const hours = Math.floor(minutes / 60 - days * 24);
  const restMinutes = minutes % 60;

  // const doubleHours = normalizeDigits(hours);
  // const doubleMinuset = normalizeDigits(restMinutes);

  const output =
    days === 0
      ? `${normalizeDigits(hours)} hours ${normalizeDigits(
          restMinutes
        )} minutes`
      : hours === 0
      ? `${normalizeDigits(restMinutes)} minutes`
      : restMinutes === 0
      ? '00 days 00 hours 00 minutes'
      : `${normalizeDigits(days)} days ${normalizeDigits(
          hours
        )} hours ${normalizeDigits(restMinutes)} minutes`;

  console.log(output);

  // return `${doubleHours}:${doubleMinuset}`;
  // return `${normalizeDigits(hours)}:${normalizeDigits(restMinutes)}`;
}

function normalizeDigits(value, digitsLength = 2, fill = '0') {
  if (typeof value !== 'number') return;

  return String(value).padStart(digitsLength, fill);
}

// console.log(formatTime(19)); // "00:19"
// console.log(formatTime(69)); // "01:19"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(2441)); // "24:01"
