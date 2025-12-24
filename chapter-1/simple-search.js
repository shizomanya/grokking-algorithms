function simpleSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return undefined;
}

const list = [4, 2, 7, 1, 9];

console.log(simpleSearch(list, 7)); // 2
console.log(simpleSearch(list, 5)); // undefined