/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 0;
let timestring;

if (minutes === 0) {
  timestring = `${hours} г.`;
} else {
  timestring = `${hours} г. ${minutes} хв.`;
}

timestring = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;

// console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

function whenIsDeadline(daysUntilDeadline) {
  // daysUntilDeadline = 0
  if (daysUntilDeadline === 0) {
    return 'Today';
  } else if (daysUntilDeadline === 1) {
    return 'Tomorrow';
  } else if (daysUntilDeadline === 2) {
    return 'Overmorrow';
  } else {
    return 'Date in the future';
  }
}

const res1 = whenIsDeadline(3);
// console.log('🚀 ~ res1:', res1);

const res2 = whenIsDeadline(0);
// console.log('🚀 ~ res2:', res2);

const res3 = whenIsDeadline(1);
// console.log('🚀 ~ res3:', res3);

// const daysUntilDeadline = 0;
// let message = '';

// if (daysUntilDeadline === 0) {
//   // console.log('Today');
//   message = 'Today';
// } else if (daysUntilDeadline === 1) {
//   // console.log('Tomorrow');
//   message = 'Tomorrow';
// } else if (daysUntilDeadline === 2) {
//   // console.log('Overmorrow');
//   message = 'Overmorrow';
// } else {
//   // console.log('Date in the future');
//   message = 'Date in the future';
// }

// console.log(message);
