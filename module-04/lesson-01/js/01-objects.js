/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  isFavourite: true,
  'created at': '09-11-2025T10:00',
  tracks: ['track-01.mp3', 'track-02.mp3', 'track-03.mp3'],
  userProfile: {
    name: 'Mango',
    theme: 'light',
    age: 18,
    type: 'premium',
    genres: ['rock', 'pop', 'rap', 'folk'],
    location: {
      code: 36,
      country: 'Ukraine',
      city: 'Kyiv',
      street: 'Chreschatyk',
      building: 13,
      // coord: {
      //   lon: 100.4,
      //   lat: 200.5,
      // },
    },
  },
};

// console.log(playlist['created at']);
// console.log(playlist['name']);

// const date = playlist[prompt('When playlist was created?', 'created at')];
// console.log('🚀 ~ date:', date);

// console.log(playlist.name);
// console.log(playlist.isFavourite);
// console.log(playlist.tracks[2]);
const country = playlist.userProfile.location.country;
// console.log('🚀 ~ country:', country);

const coordinates = playlist?.userProfile?.location?.coords?.lon;

// if (!coordinates) {
//   console.warn('Empty coords');
// }
// console.log('🚀 ~ coordinates:', coordinates);

// console.log('🚀 ~ playlist:', playlist);

playlist.tracks.push('track-04.mp3');

// console.table(playlist.tracks);

playlist.isFavourite = false;

const newTracks = ['track-05.mp3', 'track-06.mp3', 'track-07.mp3'];

playlist.tracks = playlist.tracks.concat(newTracks);

// console.log('🚀 ~ playlist:', playlist.tracks);

// playlist.tracks = 1;
console.log('🚀 ~ playlist:', playlist);
playlist.rating = 4.7;
console.log('🚀 ~ playlist:', playlist);

/**
 * -----------------------------------
 */
const propertyName = 'tracks';

/**
 * -----------------------------------
 */
function fn1(coords = {}) {
  console.log(coords);
  console.log(coords.x);
  console.log(coords.y);
}

// fn1({ x: 1, y: 10 });
// fn1({ x: 11, y: 22 });
