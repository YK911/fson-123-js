function pow(value, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= value;
  }

  return result;
}

const res1 = pow(2, 10);
console.log('🚀 ~ res1:', res1);

function reccPow(value, n) {
  if (n === 1) {
    return value;
  } else {
    return value * reccPow(value, n - 1);
  }
}

reccPow(2, 4);
