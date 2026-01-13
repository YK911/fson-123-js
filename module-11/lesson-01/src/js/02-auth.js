import '../common.css';

/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://thecatapi.com/
 */
const headersList = {
  Accept: '*/*',
  'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
  'x-api-key':
    'live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF',
};

function fetchNews(path, options) {
  const headers = new Headers({
    Accept: '*/*',
    'Content-Type': 'application/json',
    'x-api-key':
      'live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF',
  });

  return fetch(`https://api.thecatapi.com/v1/${path}`, {
    method: 'GET',
    headers,
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}

fetchNews('breeds', headersList).then(data => {
  console.log(data);
});
