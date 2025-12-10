/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob',
  skills: {
    html: true,
    css: false,
    js: true,
  },
  email: 'jacob@mail.com',
};

// Без деструктуризації
function getUserName(obj) {
  console.log(
    `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
  );
}

getUserName(user);

// З деструктуризацією

// function getUsername(obj) {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

function getUsername({
  username,
  skills: { html, css, js },
  email = 'example@mail.com',
}) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`
  );

  console.log(`Hello ${username}, your email: ${email}`);
}

// getUsername(user);
