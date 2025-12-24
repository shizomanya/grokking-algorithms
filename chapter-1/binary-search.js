function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return undefined;
}

const sortedList = [1, 3, 5, 7, 9];

console.log(binarySearch(sortedList, 1));   // 0
console.log(binarySearch(sortedList, 7));   // 3
console.log(binarySearch(sortedList, -1));  // undefined