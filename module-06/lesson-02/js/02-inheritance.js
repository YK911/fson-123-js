/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */
class Hero {
  constructor(setting = { health: 50, xp: 10 }) {
    this.health = setting.health;
    this.xp = setting.xp;
  }
}

// ? Паттерн "обʼєтк параметрів"
const options = {
  health: 50,
  xp: 200,
};

class Warrior extends Hero {
  constructor(weapon, options) {
    super(options); // === Hero.constructor()
    this.weapon = weapon;
  }

  attack() {
    console.log(`Warrior attacks with ${this.weapon} and gain 10xp`);
    this.xp += 10;
  }
}

const warriorSetting = { health: 100, xp: 100 };
const warrior = new Warrior('axe', warriorSetting);
warrior.attack();
console.log('🚀 ~ warrior:', warrior);

class Mage extends Hero {
  constructor(spell, options) {
    super(options);
    this.spell = spell;
  }
  cast() {
    console.log(`Mage is casting ${this.spell} 🧙`);
  }
}

const mage = new Mage('fireball', { health: 80, xp: 100 });
console.log('🚀 ~ mage:', mage);

mage.cast();
