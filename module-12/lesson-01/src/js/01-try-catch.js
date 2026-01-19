import '../common.css';

/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 *  - ❌ помилки парсингу (parsing errors)
 *  - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 *  - name
 *  - message
 *  - stack
 * - Блок catch без об'єкта помилки
 */

function init() {
  try {
    // const a = 5;
    // a = 6;
    const jsonFormat = '{"wrong JSON format"}';

    if (Math.random() > 0.5) {
      throw new Error('Somethong went wrong');
    }

    console.log('After throwing Error');
  } catch (error) {
    // console.dir(error.name);
    console.dir(error.message);
    // console.log(error.stack);

    alert(error.message);
    // console.log('Inside catch block');
  }
}

// console.log('Before trycatch');

// init();

// setTimeout(() => {
//   try {
//     console.log(result);
//   } catch (error) {
//     console.warn(error.message);
//   }
// }, 1000);

// console.log('After trycatch');
// loader.show();
// try {
//   console.log(age);
// } catch {
//   console.warn('Custom error message');
// } finally {
//   loader.hide();
// }
