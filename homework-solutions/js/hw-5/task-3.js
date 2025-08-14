/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowelsRegex = /[aeiou]/gi;
const consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

const vowels = word.match(vowelsRegex) || [];
const consonants = word.match(consonantsRegex) || [];

vowelsAndConsonantsResult += `${word} contains ${vowels.length} vowels and ${consonants.length} consonants`;

export { vowelsAndConsonantsResult };
