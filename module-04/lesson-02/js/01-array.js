/**
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: 'Mango', online: true },
  { name: 'Kiwi', online: false },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: true },
];

// console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);
    if (friend.name === friendName) {
      console.log('Exsits ;)');
      return friend;
    }
  }
  console.log("Doesn't exsit :(");
  return null;
}

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  // console.log(allFriends);
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend.name);
    names.push(friend.name);
  }

  return names;
}

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend.online);
    if (friend.online) names.push(friend.name);
  }

  return names;
}

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.quantity * stone.price;
    }
  }

  console.warn('Вибачте, такого каменю немає 🫠');
  return null;
}

const res1 = calcTotalPrice(stones, 'Щебінь'); // 400
console.log('🚀 ~ res1:', res1);

const res2 = calcTotalPrice(stones, 'Смарагд'); // 5200
console.log('🚀 ~ res2:', res2);

if (res2) {
  const finalPrice = res2 * 0.9;
  console.log('🚀 ~ finalPrice:', finalPrice);
}

const res3 = calcTotalPrice(stones, 'Бурштин');
console.log('🚀 ~ res3:', res3);

if (res3) {
  const finalPrice = res3 * 0.9;
  console.log('🚀 ~ finalPrice:', finalPrice);
}
