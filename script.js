const mangaData = [
  { title: "Наруто", image: "PlaceHolder" },
  { title: "Ван Пис", image: "PlaceHolder" },
  { title: "Атака Титанов", image: "PlaceHolder" },
  { title: "Моя геройская академия", image: "PlaceHolder" },
  { title: "Токийский гуль", image: "PlaceHolder" },
  { title: "Клинок, рассекающий демонов", image: "PlaceHolder" },
  { title: "Семь смертных грехов", image: "PlaceHolder" },
  { title: "Обещанный Неверленд", image: "PlaceHolder" },
  { title: "Наруто", image: "PlaceHolder" },
  { title: "Ван Пис", image: "PlaceHolder" },
  { title: "Атака Титанов", image: "PlaceHolder" },
  { title: "Моя геройская академия", image: "PlaceHolder" },
  { title: "Токийский гуль", image: "PlaceHolder" },
  { title: "Клинок, рассекающий демонов", image: "PlaceHolder" },
  { title: "Семь смертных грехов", image: "PlaceHolder" },
  { title: "Обещанный Неверленд", image: "PlaceHolder" },
  { title: "Наруто", image: "PlaceHolder" },
  { title: "Ван Пис", image: "PlaceHolder" },
  { title: "Атака Титанов", image: "PlaceHolder" },
  { title: "Моя геройская академия", image: "PlaceHolder" },
  { title: "Токийский гуль", image: "PlaceHolder" },
  { title: "Клинок, рассекающий демонов", image: "PlaceHolder" },
  { title: "Семь смертных грехов", image: "PlaceHolder" },
  { title: "Обещанный Неверленд", image: "PlaceHolder" },
  { title: "Наруто", image: "PlaceHolder" },
  { title: "Ван Пис", image: "PlaceHolder" },
  { title: "Атака Титанов", image: "PlaceHolder" },
  { title: "Моя геройская академия", image: "PlaceHolder" },
  { title: "Токийский гуль", image: "PlaceHolder" },
  { title: "Клинок, рассекающий демонов", image: "PlaceHolder" },
  { title: "Семь смертных грехов", image: "PlaceHolder" },
  { title: "Обещанный Неверленд", image: "PlaceHolder" },
];

const animeData = [
  { title: "Стальной алхимик", image: "PlaceHolder" },
  { title: "Тетрадь смерти", image: "PlaceHolder" },
  { title: "Ковбой Бибоп", image: "PlaceHolder" },
  { title: "Твоё имя", image: "PlaceHolder" },
  { title: "Евангелион", image: "PlaceHolder" },
  { title: "Код Гиас", image: "PlaceHolder" },
  { title: "Врата Штейна", image: "PlaceHolder" },
  { title: "Охотник х Охотник", image: "PlaceHolder" },
  { title: "Стальной алхимик", image: "PlaceHolder" },
  { title: "Тетрадь смерти", image: "PlaceHolder" },
  { title: "Ковбой Бибоп", image: "PlaceHolder" },
  { title: "Твоё имя", image: "PlaceHolder" },
  { title: "Евангелион", image: "PlaceHolder" },
  { title: "Код Гиас", image: "PlaceHolder" },
  { title: "Врата Штейна", image: "PlaceHolder" },
  { title: "Охотник х Охотник", image: "PlaceHolder" },
  { title: "Стальной алхимик", image: "PlaceHolder" },
  { title: "Тетрадь смерти", image: "PlaceHolder" },
  { title: "Ковбой Бибоп", image: "PlaceHolder" },
  { title: "Твоё имя", image: "PlaceHolder" },
  { title: "Евангелион", image: "PlaceHolder" },
  { title: "Код Гиас", image: "PlaceHolder" },
  { title: "Врата Штейна", image: "PlaceHolder" },
  { title: "Охотник х Охотник", image: "PlaceHolder" },
  { title: "Стальной алхимик", image: "PlaceHolder" },
  { title: "Тетрадь смерти", image: "PlaceHolder" },
  { title: "Ковбой Бибоп", image: "PlaceHolder" },
  { title: "Твоё имя", image: "PlaceHolder" },
  { title: "Евангелион", image: "PlaceHolder" },
  { title: "Код Гиас", image: "PlaceHolder" },
  { title: "Врата Штейна", image: "PlaceHolder" },
  { title: "Охотник х Охотник", image: "PlaceHolder" },
  { title: "Стальной алхимик", image: "PlaceHolder" },
  { title: "Тетрадь смерти", image: "PlaceHolder" },
  { title: "Ковбой Бибоп", image: "PlaceHolder" },
  { title: "Твоё имя", image: "PlaceHolder" },
  { title: "Евангелион", image: "PlaceHolder" },
  { title: "Код Гиас", image: "PlaceHolder" },
  { title: "Врата Штейна", image: "PlaceHolder" },
  { title: "Охотник х Охотник", image: "PlaceHolder" },
];

const genres = [
  "Сёнэн",
  "Сёдзё",
  "Сэйнэн",
  "Дзёсэй",
  "Меха",
  "Исэкай",
  "Спокон",
  "Махо-сёдзё",
  "Киберпанк",
  "Мистика",
  "Психологическое",
  "Романтика",
  "Комедия",
  "Драма",
  "Фэнтези",
  "Научная фантастика",
  "Боевик",
  "Хоррор",
  "Повседневность",
  "Исторический",
];

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
  genresDiv.innerHTML = "";
  genres.forEach((genre) => {
    const genreDiv = document.createElement("div");
    genreDiv.className = "genre-item";
    genreDiv.textContent = genre;
    genresDiv.appendChild(genreDiv);
  });
}

document.getElementById("manga-link").addEventListener("click", (e) => {
  e.preventDefault();
  displayContent(mangaData);
});

document.getElementById("anime-link").addEventListener("click", (e) => {
  e.preventDefault();
  displayContent(animeData);
});

displayContent(mangaData);
displayGenres();

function toggleMenu() {
    const menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
  }

document.querySelectorAll("nav > ul > li > a").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("show");
    }
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".subnav").forEach((subnav) => {
      subnav.classList.remove("show");
    });
    document.getElementById("main-menu").classList.remove("show");
  }
});
