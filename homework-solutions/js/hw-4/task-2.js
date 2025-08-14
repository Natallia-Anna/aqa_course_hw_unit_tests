/*

Работа с оператором IF:

  1. Создать переменную "minAge" и присвоить ей значение 18
  2. Создать переменную "maxAge" и присвоить ей значение 60
  3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
  4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
  4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
    - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
    - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
    - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
    - Иначе выводите "Technical work".
  5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

  */
const minAge = 18;
const maxAge = 60;

const age = [10, 17, 18, 19, 59, 60, 61, "30"];

for (const ageses of age) {
  if (typeof ageses != 'number') {
    console.log(`Incorrect data type, curent type:${typeof ageses}`);
  } else if (ageses < minAge) {
    console.log(`[${ageses}] You don't have access cause your age is ${ageses} It's less then`);
  } else if (ageses >= minAge && ageses <= maxAge) {
    console.log(`[${ageses}] Welcome  !`);
  } else console.log(`[${ageses}] Technical work`);
}