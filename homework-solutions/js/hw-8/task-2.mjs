/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

// const words = [
//   'umbrella',
//   'apple',
//   'ocean',
//   'independent',
//   'education',
//   'elephant',
//   'island',
//   'universe',
//   'environment',
//   'queue',
// ];

// function sortedByVowels(wordsArr) {
//   // Ваш код
// }

// export { sortedByVowels };

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou'; // гласные буквы
  return [...wordsArr].sort((a, b) => {
    const countVowels = word =>
      word.toLowerCase().split('').filter(ch => vowels.includes(ch)).length;

    return countVowels(a) - countVowels(b);
  });
}

export { sortedByVowels };

