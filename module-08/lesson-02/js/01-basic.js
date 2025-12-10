/**
 * Деструктуризація об'єкта
 */

const user = {
  username: 'Jacob name',
  skills: {
    html: {
      value: true,
      level: 'high',
      xp: 89,
    },
    css: false,
    js: true,
  },
};

// const { username, skills } = user;
// console.log(username);
// console.log(skills);

/**
 * Глибока деструктуризація об'єкта
 */

// const value = 'Mango';

const {
  skills: {
    html: { level, value: skillsValue, xp },
    css,
    js,
  },
} = user;

// console.log('🚀 ~ xp:', xp);
// console.log('🚀 ~ value:', value);
// console.log('🚀 ~ level:', level);

// console.log(skills);

// console.log('html', html);

// console.log('css', css);
// console.log('js', js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5, { x: 11, y: 22 }, [444, 555, 666]];

const [num1, num2, num3, , num5, { x, y }, [a, b, c]] = arr;
// console.log('🚀 ~ a:', a);

// console.log('🚀 ~ obj:', x, y);

// console.log('🚀 ~ num1:', num1);
// console.log('🚀 ~ num2:', num2);
// console.log('🚀 ~ num3:', num3);

// console.log('🚀 ~ num5:', num5);
