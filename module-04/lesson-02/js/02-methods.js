// 'use strict';

/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  //? changeName: function () {},

  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// playList.changeName('My favourite plailist');
// console.log(playList);

// function fn(x, y) {
//   //! this = ?
//   // arguments = [x, y]
//   // x = undefined
//   // y = undefined
//   console.log(this);

//   // return undefined
// }

// fn();

// console.log(playlist.getTrackCount());

// playlist.changeName('New playlist name');
// console.log(playlist.name);

// playlist.addTrack('new track 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);
