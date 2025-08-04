/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiouAEIOU';
let vowelsCount = 0;
let consonantsCount = 0;

for (let char of word) {
  if (/[a-zA-Z]/.test(char)) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

console.log(vowelsAndConsonantsResult);



