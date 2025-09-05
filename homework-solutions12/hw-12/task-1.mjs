/*1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch*/

// 1. Функция delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

// Пример вызова
delayTwoSeconds(() => console.log("Прошло 2 секунды!"));

// 2. Промис, резолвящийся с числом 1
const promise1 = new Promise((resolve) => {
  resolve(1);
});

promise1.then((result) => console.log("Promise resolved with:", result));

// 3. Промис, реджектящийся с "Promise failed"
const promise2 = new Promise((_, reject) => {
  reject("Promise failed");
});

promise2.catch((error) => console.log("Promise rejected with:", error));

// 4. Функция promiseNumber
function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}

// 5. Promise.all с обработкой .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result, index) => {
      console.log(`Promise.all result ${index + 1}:`, result);
    });
  });

// 6. Promise.allSettled с обработкой .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result, index) => {
      console.log(
        `Promise.allSettled result ${index + 1}: status=${result.status}, value=${result.value}`
      );
    });
  });

// 7. Асинхронные функции с try..catch
async function runAll() {
  try {
    const results = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    results.forEach((result, index) => {
      console.log(`Async Promise.all result ${index + 1}:`, result);
    });
  } catch (err) {
    console.log("Error in Promise.all:", err);
  }

  try {
    const results = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    results.forEach((result, index) => {
      console.log(
        `Async Promise.allSettled result ${index + 1}: status=${result.status}, value=${result.value}`
      );
    });
  } catch (err) {
    console.log("Error in Promise.allSettled:", err);
  }
}

// Запуск асинхронной функции
runAll();

