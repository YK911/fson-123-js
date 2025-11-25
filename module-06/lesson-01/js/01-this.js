/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */
function fn() {
  // params = undefined
  // arguments = []
  // this -> {}
  console.log('foo -> this', this);

  // return undefined
}

// fn();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: 'Mango',
  // showTag: function () {
  showTag() {
    console.log('showTag -> this', this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this.tag);
}

// showTag();

const mango = {
  tag: 'Mango',
};

mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this?.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: 'Jacob',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

const deadpool = {
  tag: 'Deadpool',
};

function invokeAction(callback, ctx) {
  console.dir(callback);
  callback.call(ctx);
  // callback.call(deadpool);
}

// invokeAction(jacob.showTag, jacob);
// invokeAction(jacob.showTag, deadpool);
