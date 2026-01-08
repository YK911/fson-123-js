import '../common.css';

/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// resolve('Проміс виконався успішно, із результатом (виконаний, fulfilled)');
// reject('Проміс виконався з помилкою (відхилений, rejected)');

const refs = {
  loader: document.querySelector('.js-loader'),
  output: document.querySelector('.js-output'),
};

const promise = new Promise((resolve, reject) => {
  const canFullfiled = Math.random() > 0.5;
  console.log('🚀 ~ canFullfiled:', canFullfiled);
  refs.loader.classList.add('show');

  setTimeout(() => {
    if (canFullfiled) {
      resolve(
        'Проміс виконався успішно, із результатом (виконаний, fulfilled)'
      );
    }

    reject('Проміс виконався з помилкою (відхилений, rejected)');
  }, 2000);
});

promise
  .then(onSuccess)
  .then(success => {
    refs.output.textContent = success;
  })
  .catch(error => {
    if (typeof error === 'string' && error.includes('rejected')) {
      const charIdx = error.indexOf('(');
      const result = error.slice(0, charIdx - 1);

      refs.output.textContent = result;
    }
  })
  .finally(() => {
    refs.loader.classList.remove('show');
  });

function onSuccess(result) {
  const charIdx = result.indexOf(',');
  const success = result.slice(0, charIdx);

  return success;
}

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */
