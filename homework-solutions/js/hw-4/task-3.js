/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;

const age = [10, 17, 18, 19, '29', '30', 59, 60, 61, '99', 'bug', undefined, NaN, true];

for (let ageses of age) {
  if (typeof ageses == 'string') {
    ageses = parseInt(ageses);
  }
  if (typeof ageses != 'number') {
    console.log(`Incorrect data type, curent type:${typeof ageses}`);
  } else if (ageses < minAge) {
    console.log(`[${ageses}] You don't have access cause your age is ${ageses} It's less then`);
  } else if (ageses >= minAge && ageses <= maxAge) {
    console.log(`[${ageses}] Welcome  !`);
  } else console.log(`[${ageses}] Technical work`);
}