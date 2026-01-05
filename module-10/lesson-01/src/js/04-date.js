import '../common.css';

const daysOfWeek = {
  0: 'Sunday',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
};

/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date1 = new Date(2026, 0, 11);

// console.log('date1:', date1 / 1000);
// const normalizeDay = daysOfWeek[date1.getDay()];
// console.log('🚀 ~ normalizeDay:', normalizeDay);
// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getSeconds());

// const seconds = Math.floor((((ms % day) % hour) % minute) / second);

const date1 = new Date(2026, 0, 6);
date1.setHours(22);
date1.setMinutes(59);
date1.setSeconds(59);
// console.log('🚀 ~ date1:', date1);

// setInterval(() => {
//   const date2 = Date.now();

//   const deltaTilme = date1 - date2;
//   console.log('🚀 ~ deltaTilme:', deltaTilme);
// }, 1000);
