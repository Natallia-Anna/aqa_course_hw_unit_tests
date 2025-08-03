/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;

// Тестовые значения
let testAges = [10, 17, 18, 19, 59, 60, 61, "18", "2", "abc", "20a", true, null, undefined];

for (let input of testAges) {
  console.log(`\nПроверка значения: ${input}`);

  // Преобразуем строку, если она содержит только цифры
  if (typeof input === "string" && /^\d+$/.test(input)) {
    input = Number(input);
  }

  // Проверка типа данных после возможного преобразования
  if (typeof input !== "number" || isNaN(input)) {
    console.log("Incorrect data type");
  } else if (input < minAge && input > 0) {
    console.log("You don't have access cause your age is " + input + ". It's less than " + minAge);
  } else if (input >= minAge && input < maxAge) {
    console.log("Welcome!");
  } else if (input > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}
