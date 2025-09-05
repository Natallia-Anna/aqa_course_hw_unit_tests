/*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена*/



   async function createTodo(body) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Проверка статуса
    if (response.status !== 201) {
      throw new Error(`Ошибка: статус ${response.status}`);
    }

    const data = await response.json();

    // Проверка id
    if (data.id !== 201) {
      throw new Error(`Ошибка: неверный id (${data.id})`);
    }

    console.log("Todo успешно создан:", data);
    return data;
  } catch (error) {
    console.error("Ошибка в createTodo:", error.message);
  } finally {
    console.log("Работа функции завершена");
  }
}

// Пример вызова
createTodo({
  userId: 1,
  title: "Новая тудушка",
  completed: false,
});
