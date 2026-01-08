import '../common.css';

/**
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

const makeOrder = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  setTimeout(() => {
    if (passed) {
      onSuccess(`✅ Ваше замовлення: ${dish}`);
    }

    onError('❌ Упс, у нас закінчилися продукти');
  }, 1000);
};

// makeOrder(
//   'пиріжок',
//   result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   },
//   error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   }
// );

const makePrimaryOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    console.log(passed);

    setTimeout(() => {
      if (passed) {
        resolve(`✅ Ваше замовлення: ${dish}`);
      }

      reject('❌ Упс, у нас закінчилися продукти');
    }, 1000);
  });
};

// makePrimaryOrder('пиріжок')
//   .then(success => {
//     console.log(success);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = dish => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject('❌ Упс, у нас закінчилися продукти');
};

const onSuccess = data => {
  console.log(data);
};

const onError = error => {
  console.log(error);
};

// prepareDish('пиріжок').then(onSuccess).catch(onError);

const quote1 = 'https://dummyjson.com/quotes123/1';
const quote2 = 'https://dummyjson.com/quotes/2';
const quote3 = 'https://dummyjson.com/quotes/3';
3;
const dataArr = [];

const servers = [quote1, quote2, quote3];
// const fetchData = servers.map(query => fetch(query));

// console.log('🚀 ~ fetchData:', fetchData);

// fetch(quote1)
//   .then(data => {
//     dataArr.push(data);
//   })
//   .then(() => {
//     fetch(quote2).then(data => {
//       dataArr.push(data);

//       fetch(quote3).then(data => {
//         dataArr.push(data);
//       });
//     });
//   })
//   .then(() => {
//     console.log(dataArr);
//   });

/* b, c, after */
// Promise.all([
//   fetch(GOOGLE).then(function b() {}),
//   fetch(GOOGLE).then(function c() {}),
// ]).then(function after() {});

// Promise.allSettled(fetchData)
//   .then(data => {
//     console.log(data);

//     Promise.all(data.map(item => item.json())).then(data => {
//       console.log(data);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

const arr = ['🍋', '🍆', '🍑'];

const results = arr.map((item, idx) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (idx === 1) {
      //   reject(item);
      // }

      resolve(item);
    }, 500 * Math.random());
  });
});
// Promise.allSettled(results)
//   .then(data => {
//     const newData = data.filter(({ status }) => status === 'fulfilled');
//     console.log('🚀 ~ newData:', newData);
//   })
//   .catch();

Promise.race(results)
  .then(data => {
    console.log('🚀 ~ data:', data);
  })
  .catch();
