function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

console.log(gcd(48, 18)); // 6
console.log(gcd(101, 103)); // 1
console.log(gcd(56, 98)); // 14
console.log(gcd(-24, 36)); // 12,