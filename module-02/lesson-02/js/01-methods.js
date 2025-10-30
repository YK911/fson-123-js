/**
 * Методи рядків
 *
 *  - trim
 *  - includes
 *  - toLowerCase/toUpperCase
 *  - slice
 *  - startsWith/endsWith
 *  - indexOf
 */

const username = 'Jacob Mercer Junior';
const userEmail = formEmail.value;
// console.log('🚀 ~ userEmail:', userEmail);
// console.log('🚀 ~ userEmail:', userEmail.length);

// const checkDomen = userEmail.endsWith('.com', 19);
// console.log('🚀 ~ checkDomen:', checkDomen);

const normalizeEmail = userEmail.trim();
// console.log('🚀 ~ userEmail:', normalizeEmail.length);
const checkSymbolEmail = normalizeEmail.includes('@');
// console.log('🚀 ~ checkSymbolEmail:', checkSymbolEmail);
const checkDomenEmail = normalizeEmail.includes('.com');
// console.log('🚀 ~ checkDomenEmail:', checkDomenEmail);

// const res = username.replaceAll(' ', '  ');
// console.log('🚀 ~ username:', username);
// console.log('🚀 ~ res:', res);

('Junior');
('jUnior');
('JuNioR');

const checkWord = 'junior';
const normalizedName = username.toLowerCase();
// console.log('🚀 ~ normalizeName:\n', normalizedName);
const isJunior = normalizedName.includes(checkWord);

if (isJunior) {
  const updName = normalizedName.replace('junior', 'senior');
  // console.log('🚀 ~ updName:', updName);
}

const firstLetter = normalizedName[0];
// console.log('🚀 ~ firstLetter:', firstLetter);
const capitalizedFirstLetter = firstLetter.toUpperCase();
// console.log('🚀 ~ capitalizedFirstLetter:', capitalizedFirstLetter);
// normalizedName[0] = capitalizedFirstLetter; //! ⚠️ РЯДКИ НЕЗМІННІ

('jacob mercer junior');
// const copyStr = normalizedName.slice(1, normalizedName.length);
const copyStr = normalizedName.slice(1);
// console.log('🚀 ~ copyStr:', copyStr);
const resultStr = capitalizedFirstLetter + copyStr;
// console.log('🚀 ~ resultStr:', resultStr);

const str = 'mangogo';
// console.log('🚀 ~ str:', str);
const res1 = str.slice(1, 3);
// console.log('🚀 ~ res1:', res1);

const res2 = str.indexOf('go', 4);
console.log('🚀 ~ res2:', res2);
