// Создаем переменную salary
let salary = 1000;

// Создаем переменную grade на основе условия
let grade = salary >= 1000 ? "middle" : "junior";

// Выводим результат в консоль
console.log("Зарплата:", salary);
console.log("Уровень:", grade);



let minAge = 18;
let maxAge = 60;

// Тестовые значения
let testAges = [10, 17, 18, 19, 59, 60, 61, "18", "двадцать", true, null, -1];

for (let age of testAges) {
  console.log(`\nПроверка возраста: ${age}`);

  if (typeof age !== "number") {
    console.log("Incorrect data type");
  } else if (age < minAge && age > 0) {
    console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
  } else if (age >= minAge && age <= maxAge) {
    console.log("Welcome!");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}



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
  } else if (input >= minAge && input <= maxAge) {
    console.log("Welcome!");
  } else if (input > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}

