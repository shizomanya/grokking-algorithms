function binarySearch(arr, target, left = 0, right = arr.length - 1) {

  if (left > right) {
    return undefined;
  }
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

const sortedList = [1, 3, 5, 7, 9];

console.log(binarySearch(sortedList, 1));   // 0
console.log(binarySearch(sortedList, 7));   // 3
console.log(binarySearch(sortedList, -1));  // undefined