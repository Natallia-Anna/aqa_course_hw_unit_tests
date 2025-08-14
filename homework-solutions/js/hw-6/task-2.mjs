/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let result1 = [];
let result2 = [];

for (let myPizza of myPizzasT1) {
  let matchFound = false;
  for (let competitorPizza of competitorPizzas) {
    if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
      matchFound = true;
      break;
    }
  }
  if (!matchFound) {
    result1.push(myPizza);
  }
}
result1.length ? resultUnique = result1 : resultNull = null;

for (let myPizza of myPizzasT2) {
  let matchFound = false;
  for (let competitorPizza of competitorPizzas) {
    if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
      matchFound = true;
      break;
    }
  }
  if (!matchFound) {
    result2.push(myPizza);
  }
}
result2.length ? resultUnique = result2 : resultNull = null;


export { resultNull, resultUnique };