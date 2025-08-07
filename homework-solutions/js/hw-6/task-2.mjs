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


const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;

function findUniquePizzas(myPizzas, competitorPizzas) {
  // Приводим все названия к нижнему регистру для сравнения
  const competitorLower = competitorPizzas.map(pizza => pizza.toLowerCase());
  
  const unique = myPizzas.filter(pizza => 
    !competitorLower.includes(pizza.toLowerCase())
  );

  if (unique.length === 0) {
    return null;
  }

  return unique;
}

// Пример использования:
resultUnique = findUniquePizzas(myPizzasT1, competitorPizzas); // ['Margherita', 'Vegetarian']
resultNull = findUniquePizzas(myPizzasT2, competitorPizzas);   // null

console.log(resultNull, resultUnique);
