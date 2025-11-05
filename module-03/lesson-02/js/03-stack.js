/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  console.log('fnA execution');
  fnB();
}

function fnB() {
  console.log('fnB execution');
  fnC();
}

function fnC() {
  console.log('fnC execution');
}
debugger;
// console.log('Before fnA execution');
fnA();
// console.log('After fnA execution');

// console.log('Before fnB execution');
// fnB();
// console.log('After fnB execution');

// console.log('Before fnC execution');
// fnC();
// console.log('After fnC execution');

// Call stack -> LIFO === Last In First Out
// Heap       -> FILO === First In Last Out
// Queue      -> FIFO === First In First Out
