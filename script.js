const mangaData = [
  { title: "Наруто", image: "placeholder.jpg" },
  { title: "Ван Пис", image: "placeholder.jpg" },
  { title: "Атака Титанов", image: "placeholder.jpg" },
  { title: "Моя геройская академия", image: "placeholder.jpg" },
  { title: "Токийский гуль", image: "placeholder.jpg" },
  { title: "Клинок, рассекающий демонов", image: "placeholder.jpg" },
  { title: "Семь смертных грехов", image: "placeholder.jpg" },
  { title: "Обещанный Неверленд", image: "placeholder.jpg" },
  { title: "Берсерк", image: "placeholder.jpg" }, 
  { title: "Хвост Феи", image: "placeholder.jpg" }, 
  { title: "Блич", image: "placeholder.jpg" }, 
  { title: "Стальной Алхимик", image: "placeholder.jpg" }, 
  { title: "Тетрадь Смерти", image: "placeholder.jpg" }, 
  { title: "Ковбой Бибоп", image: "placeholder.jpg" }, 
  { title: "One Punch Man", image: "placeholder.jpg" }, 
  { title: "Черный клевер", image: "placeholder.jpg" }, 
];

const animeData = [
  { title: "Стальной алхимик", image: "placeholder.jpg" },
  { title: "Тетрадь смерти", image: "placeholder.jpg" },
  { title: "Ковбой Бибоп", image: "placeholder.jpg" },
  { title: "Твоё имя", image: "placeholder.jpg" },
  { title: "Евангелион", image: "placeholder.jpg" },
  { title: "Код Гиас", image: "placeholder.jpg" },
  { title: "Врата Штейна", image: "placeholder.jpg" },
  { title: "Охотник х Охотник", image: "placeholder.jpg" },
  { title: "Судьба/Ночь схватки", image: "placeholder.jpg" },
  { title: "Мастер Меча Онлайн", image: "placeholder.jpg" },
  { title: "Паразит", image: "placeholder.jpg" },
  { title: "Невероятные приключения ДжоДжо", image: "placeholder.jpg" },
  { title: "Реинкарнация безработного", image: "placeholder.jpg" },
  { title: "Вайолет Эвергарден", image: "placeholder.jpg" },
  { title: "Человек-бензопила", image: "placeholder.jpg" },
  { title: "Ванпанчмен", image: "placeholder.jpg" },
  { title: "Волейбол!!", image: "placeholder.jpg" },
  { title: "Милый во Франксе", image: "placeholder.jpg" },
  { title: "Магическая битва", image: "placeholder.jpg" },
  { title: "Нет игры — нет жизни", image: "placeholder.jpg" },
];

const genres = [
  "Сёнэн", "Сёдзё", "Сэйнэн", "Дзёсэй", "Меха", "Исэкай", "Спокон", "Махо-сёдзё",
  "Киберпанк", "Мистика", "Психологическое", "Романтика", "Комедия", "Драма",
  "Фэнтези", "Научная фантастика", "Боевик", "Хоррор", "Повседневность", "Исторический",
];

let currentData = mangaData;

function displayContent(data) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; 
  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "content-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    contentDiv.appendChild(itemDiv);
  });
}

function displayGenres() {
  const genresDiv = document.getElementById("genres");
  genres.forEach((genre) => {
    const genreDiv = document.createElement("div");
    genreDiv.className = "genre-item";
    genreDiv.textContent = genre;
    genresDiv.appendChild(genreDiv);
  });
}

function searchContent(query) {
  const searchResults = currentData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  displayContent(searchResults);
}

document.getElementById("manga-link").addEventListener("click", (e) => {
  e.preventDefault();
  currentData = mangaData;
  displayContent(currentData);
  document.getElementById('section-indicator').textContent = "Манга"; 
});

document.getElementById("anime-link").addEventListener("click", (e) => {
  e.preventDefault();
  currentData = animeData;
  displayContent(currentData);
  document.getElementById('section-indicator').textContent = "Аниме"; 
});

document.getElementById("manga-link").addEventListener("click", (e) => {
  e.preventDefault();
  currentData = mangaData;
  displayContent(currentData);
});

document.getElementById("anime-link").addEventListener("click", (e) => {
  e.preventDefault();
  currentData = animeData;
  displayContent(currentData);
});

document.querySelector(".search-container button").addEventListener("click", () => {
  const searchQuery = document.querySelector(".search-container input").value;
  searchContent(searchQuery);
});

document.querySelector(".search-container input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchQuery = e.target.value;
    searchContent(searchQuery);
  }
});

displayContent(currentData);
displayGenres();