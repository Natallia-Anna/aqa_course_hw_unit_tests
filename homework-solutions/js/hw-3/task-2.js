/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
const n = 9;
//var1
const nn = Number(String(n) + String(n));
const nnn = Number(String(n) + String(n) + String(n));
console.log(n + nn + nnn);
//var2
const mm = Number('' + n + n);
const mmm = Number('' + n + n + n);
console.log(n + mm + mmm);
//var3
console.log(n + Number('' + n + n) + Number('' + n + n + n));