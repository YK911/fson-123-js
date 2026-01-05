import '../common.css';

/**
 * Метод setInterval(callback, delay, args)
 */

const logger = (time, logName) => {
  switch (logName) {
    case 'First':
      console.warn(`${logName}: Лог кожні ${time} мс - ${Date.now()}`);
      break;
    case 'Second':
      console.error(`${logName}: Лог кожні ${time} мс - ${Date.now()}`);
      break;

    default:
      console.log(`${logName}: Лог кожні ${time} мс - ${Date.now()}`);
  }
};

// console.log('До виклику setInterval');

// setInterval(logger, 2000, 2000);

// console.log('Після виклику setInterval');

/**
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// const intervalId1 = setInterval(logger, 2000, 2000, 'First');
// const intervalId2 = setInterval(logger, 1000, 1000, 'Second');
// const intervalId3 = setInterval(logger, 500, 500, 'Third');
// const intervalId4 = setInterval(logger, 2000, 2000);
// const intervalId5 = setInterval(logger, 2000, 2000);

setTimeout(() => {
  clearInterval(intervalId3);
}, 5000);
