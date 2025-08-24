/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  let sum = 0;
  if (typeof number !== 'number') {
    return 'Invalid data';
  }

  if (number <= 9 && number >= 0) {
    return number;
  } else {
    let numbers = number.toString().split('');
    for (let i of numbers) {
      sum += parseInt(i);
    }
  }
  return digitalRoot(sum);
}

export { digitalRoot };