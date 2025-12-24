function factorial(n) {
  if (n < 0) {
    throw new Error('n должно быть >= 0');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
console.log(factorial(1)); // 1