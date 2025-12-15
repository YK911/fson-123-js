console.log(sessionStorage);

const json = JSON.stringify({
  name: 'Mango',
  isAdult: false,
});

sessionStorage.setItem('userInfo', json);
