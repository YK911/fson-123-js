/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */
class User {
  #login;
  #email;

  constructor(params = {}) {
    this.#login = params.login;
    this.#email = params.email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    if (newLogin.length <= 3) {
      console.log('Login must contains more then 3 chars');

      return;
    }

    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (
      newEmail.includes('@') ||
      newEmail.endsWith('.com') ||
      newEmail.test('w+.com$')
    ) {
      console.log('Not valid email');
      return;
    }

    this.#email = newEmail;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
poly.email = 'poly@mail';
