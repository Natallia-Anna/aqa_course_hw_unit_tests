/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.

*/

function validatePassword(password: string): boolean {
  const trimmed = password.trim();
  if (trimmed.length < 8) return false;

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  for (const char of trimmed) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 'a' && char <= 'z') hasLower = true;
    else if (!isNaN(Number(char))) hasDigit = true;

    if (hasUpper && hasLower && hasDigit) break;
  }

  return hasUpper && hasLower && hasDigit;
}