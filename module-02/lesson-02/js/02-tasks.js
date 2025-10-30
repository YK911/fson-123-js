/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about/';
// console.log('🚀 ~ link:', link);

const endsWithSlash = link.endsWith('/');
// console.log('🚀 ~ endsWithSlash:', endsWithSlash);

if (!endsWithSlash) {
  link += '/';
}

// console.log('🚀 ~ link:', link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної url символом /. Якщо ні, додай до кінця
 * значення url цей символ, але тільки в тому випадку,
 * якщо в url є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = 'https://my-site.com/about';
const isUnvalidUrl = !url.endsWith('/') && url.includes('my-site');
// console.log('🚀 ~ isUnvalidUrl:', isUnvalidUrl);

if (isUnvalidUrl) {
  url += '/';
  // console.log(url);
} else {
  // console.log(url);
}

/**
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const string1 =
  "Hello, I'm Prince Abdul, this is not spaM, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

//? chaining
const check1 = string1.toLowerCase().includes(blacklistedWord1);
const check2 = string1.toLowerCase().includes(blacklistedWord2);

if (check1 || check2) {
  console.log(string1);

  console.warn('Has spam words');
}

function checkSpamWords(
  str,
  blacklistedWord1 = 'spam',
  blacklistedWord2 = 'sale'
) {
  const hasSpamWord =
    str.toLowerCase().includes(blacklistedWord1) ||
    str.toLowerCase().includes(blacklistedWord2);

  if (hasSpamWord) {
    console.warn('Has spam words');
  } else {
    console.log('Spam words not found');
  }
}

checkSpamWords(string2);
checkSpamWords(string3);
