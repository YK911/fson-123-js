/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      alert(
        `Not enough money. Your amount: ${amount} is greater than current balance`
      );
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /**
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const trns of this.transactions) {
      if (trns.id === id) {
        return trns;
      }
    }

    return null;
  },

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    if (this.transactions.length === 0) {
      return 0;
    }

    let total = 0;

    for (const trns of this.transactions) {
      if (trns.type === type) {
        total += trns.amount;
      }
    }

    return total;
  },
};

account.deposit(1000);
account.deposit(400);
account.deposit(100);
account.deposit(50);
account.deposit(200);
const res1 = account.getBalance();
console.log('🚀 ~ res1:', res1);
console.log(account.transactions);

account.withdraw(100);
console.log(account.getBalance());
account.withdraw(1400);
console.log(account.getBalance());

const totalWithdrowAmount = account.getTransactionTotal('withdraw');
console.log('🚀 ~ totalWithdrowAmount:', totalWithdrowAmount);

const totalDepositAmount = account.getTransactionTotal('deposit');
console.log('🚀 ~ totalDepositAmount:', totalDepositAmount);

const trns1 = account.getTransactionDetails(1);
console.log('🚀 ~ trns1:', trns1);
const trns10 = account.getTransactionDetails(10);
console.log('🚀 ~ trns10:', trns10);

function showBalance() {
  console.log(this);
}

console.dir(showBalance);

account.show = showBalance;

account.show();

showBalance();
