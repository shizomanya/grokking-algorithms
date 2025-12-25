function quickSort(arr) {
  // базовый случай
  if (arr.length < 2) {
    return arr;
  }

  // выбираем опорный элемент
  let pivot = arr[0];

  let less = [];
  let greater = [];

  // один проход по массиву, распределяем элементы
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  // рекурсивно сортируем подмассивы
  let sortedLess = quickSort(less);
  let sortedGreater = quickSort(greater);

  // формируем итоговый массив вручную
  let result = [];
  for (let i = 0; i < sortedLess.length; i++) {
    result.push(sortedLess[i]);
  }
  result.push(pivot);
  for (let i = 0; i < sortedGreater.length; i++) {
    result.push(sortedGreater[i]);
  }

  return result;
}

console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]