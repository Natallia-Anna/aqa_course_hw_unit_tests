/*На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)*/





async function loadUsersWithAlbumsAndPhotos() {
  try {
    // Делаем три запроса параллельно
    const [usersRes, albumsRes, photosRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/albums"),
      fetch("https://jsonplaceholder.typicode.com/photos"),
    ]);

    // Преобразуем ответы в JSON
    const [users, albums, photos] = await Promise.all([
      usersRes.json(),
      albumsRes.json(),
      photosRes.json(),
    ]);

    // Перебираем пользователей
    users.forEach((user, index) => {
      console.log(`${index + 1}. name: ${user.name}`);
      console.log(`   email: ${user.email}`);
      console.log(`   phone: ${user.phone}`);
      console.log(`   company: ${user.company.name}`);
      console.log("   albums:");

      // Альбомы этого пользователя
      const userAlbums = albums.filter((album) => album.userId === user.id);

      userAlbums.forEach((album) => {
        // Фотографии этого альбома
        const albumPhotos = photos.filter((photo) => photo.albumId === album.id);
        console.log(`     ${album.title} (${albumPhotos.length} photos)`);
      });

      console.log("__________________________________\n");
    });
  } catch (err) {
    console.error("Ошибка загрузки данных:", err.message);
  }
}

// Запуск функции
loadUsersWithAlbumsAndPhotos();
