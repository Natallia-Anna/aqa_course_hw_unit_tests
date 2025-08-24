/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
// const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// let forEach;
// let map;
// let filter;
// let find;
// let sort;
// let reduce;
// let some;
// let every;

// export { forEach, map, filter, find, sort, reduce, some, every };

const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// 1. forEach - числа, делящиеся на 3
let forEach = [];
numbers.forEach(num => {
  if (num % 3 === 0) {
    forEach.push(num);
  }
});

// 2. map - вычесть длину массива из каждого элемента
let map = numbers.map(num => num - numbers.length);

// 3. filter - значения, которые больше предыдущего
let filter = numbers.filter((num, index, arr) => index === 0 ? false : num > arr[index - 1]);

// 4. find - элемент, равный своему индексу
let find = numbers.find((num, index) => num === index);

// 5. sort - отсортированный массив, не изменяя оригинал
let sort = [...numbers].sort((a, b) => a - b);

// 6. reduce - сумма всех чисел массива
let reduce = numbers.reduce((acc, num) => acc + num, 0);

// 7. some - есть ли элементы больше 90
let some = numbers.some(num => num > 90);

// 8. every - все ли элементы двухзначные
let every = numbers.every(num => num >= 10 && num <= 99);

export { forEach, map, filter, find, sort, reduce, some, every };

