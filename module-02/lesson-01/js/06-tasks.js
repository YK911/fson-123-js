/**
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типи підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const STATUSES = {
  free: 'free',
  pro: 'pro',
  vip: 'vip',
};

const subcr = 'vip';
const canAccessContent = subcr === 'pro' || subcr === 'vip';
// console.log('🚀 ~ canAccessContent:', canAccessContent);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має одночасно бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = false;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

// if (isOnline && isFriend && !isDnd) {
if (canOpenChat) {
  console.log('Можна відкрити чат з користувачем');
} else {
  console.log('Чат з користувачем не доступний');
}

// console.log('Можна відкрити чат? ', canOpenChat);
