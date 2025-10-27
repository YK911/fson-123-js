/**
 * Оператор switch
 */

const username = 'manGo';

// switch (username) {
//   case 'Mango': // 'Mango' === 'mango'
//   case 'mango': // 'mango' === 'manGo'
//     console.log('case 1');
//     break;

//   case 'Poly':
//     console.log('case 2');
//     break;

//   case 'Ajax':
//     console.log('case 3');
//     break;

//   default:
//     console.log('Unknown case');
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0: // daysUntilDeadline === 0
//     console.log('Today');
//     break;

//   case 1: // daysUntilDeadline === 1
//     console.log('Tomorrow');
//     break;

//   case 2: // daysUntilDeadline === 2
//     console.log('Overmorrow');
//     break;

//   default:
//     console.log('Date in the future');
// }

/**
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта
 *
 * В змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Пакунок буде відправлено сьогодні'
 * - 'Вам зателефонує менеджер'
 */

function initSelect(selector = '') {
  if (selector.length === 0) {
    console.warn('Select HTML element');
    return;
  }

  handleSelect(null, selector);
}

function handleSelect(event, element = null) {
  let selectEl;

  if (element || !event) {
    selectEl = element;
  } else {
    selectEl = event.target;
  }

  const option = Number(selectEl.selectedOptions[0].value);

  switch (option) {
    case 1:
      output.textContent =
        'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
      break;

    case 2:
      output.textContent = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';
      break;

    case 3:
      output.textContent = 'Пакунок буде відправлено сьогодні';
      break;

    default:
      output.textContent = 'Вам зателефонує менеджер';
  }
}

initSelect(deliveryOption);

deliveryOption.onchange = handleSelect;

// const option = 123.1;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//     break;

//   case 2:
//     message = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Пакунок буде відправлено сьогодні';
//     break;

//   default:
//     message = 'Вам зателефонує менеджер';
// }

// console.log(message);
