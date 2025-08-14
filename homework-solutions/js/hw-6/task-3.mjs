/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let unique;

for (let i = 0; i < array.length; i++) {
  let index = array.lastIndexOf(array[i]);
  while (index > i) {
    array.splice(array.lastIndexOf(array[i]), 1);
    index = array.lastIndexOf(array[i]);
  }
}

unique = array;

export { unique };