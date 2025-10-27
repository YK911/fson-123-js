/**
 * Блокова область видимості змінних
 */

//? Hoisting

fn1();

const c = 15;

{
  // const x = 123;
  // console.log(c);
}

if (true) {
  const a = 1000;
  console.log(a);
  console.log(c);
}

if (true) {
  const b = 2000;
  console.log(b);
  console.log(c);
  // console.log(a);
}

function fn1() {
  const y = 12.4;

  if (true) {
    const c = 123;

    debugger;
    console.log(y);
    console.log(c);
  }

  // console.log(b);
}

// console.log(x);
