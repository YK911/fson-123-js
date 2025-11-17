/**
 * Метод flatMap
 */

const tweets = [
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
    friends: [['Mango', 'Poly', 'Ajax', 'Jupiter']],
  },
  {
    id: '001',
    likes: 2,
    tags: ['html', 'css'],
    friends: [['Mango', , 'Jupiter', 'Poly', 'Ajax']],
  },
  {
    id: '002',
    likes: 17,
    tags: ['html', 'js', 'nodejs'],
    friends: [['Ajax', 'Jupiter', 'Mango', 'Poly']],
  },
  {
    id: '003',
    likes: 8,
    tags: ['css', 'react'],
    friends: [['Ajax', 'Mango', 'Poly', 'Jupiter']],
  },
  {
    id: '004',
    likes: 0,
    tags: ['js', 'nodejs', 'react'],
    friends: [['Poly', 'Mango', 'Ajax', 'Jupiter']],
  },
];

const tags = tweets.flatMap((tweet, idx, arr) => {
  return tweet.tags;
});
console.log(tags);

const mapTags = tweets.map((tweet, idx, arr) => {
  return tweet.tags;
});
console.log('🚀 ~ mapTags:', mapTags);

const friendNames = tweets.flatMap((tweet, idx, arr) => {
  return tweet.friends;
});
console.log('🚀 ~ friendNames:', friendNames);
