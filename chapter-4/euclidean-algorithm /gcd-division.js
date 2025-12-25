function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

console.log(gcd(48, 18)); // 6
console.log(gcd(101, 103)); // 1
console.log(gcd(56, 98)); // 14
console.log(gcd(-24, 36)); // 12,