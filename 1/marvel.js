let json = `[{
    "image": "<img src=img/batman.jpg>",
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alter_ego": "Брюс Уэйн",
    "friends": "Робин, Бэтгерл",
    "career": [
        "борец с преступностью", 
        " филантроп", 
        " миллиардер"
    ],
    "superpowers": [
        "интеллект",
        " обширные познания",
        " знания боевых искусств",
        " ловкость"
    ],
    "more": "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности."
}, {
    "image": "<img src=img/superman.jpg>",
    "name": "Супермен",
    "universe": "DC Comics",
    "alter_ego": "Кларк Кент",
    "friends": "собака Крипто",
    "career": "борец за справедливость",
    "superpowers": [
        "непробиваемость",
        " суперсила",
        " полет",
        " самоисцеление",
        " суперзрение и суперслух",
        " классный костюм"
    ],
    "more": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. "
}, {
    "image": "<img src=img/ironman.jpg>",
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alter_ego": "Тони Старк",
    "friends": "Мстители",
    "career": [
        "гений",
        " миллиардер",
        " плейбой",
        " филантроп"
    ],
    "superpowers": [
        "высокий уровень интеллекта",
        " широкие познания науки и техники",
        " бронекостюмы",
        " связь со всемирной паутиной"
    ],
    "more": "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже."
}, {
    "image": "<img src=img/spiderman.jpg>",
    "name": "Человек-паук",
    "universe": "Marvel Comics",
    "alter_ego": "Питер Паркер",
    "friends": [
        "Мстители",
        " Фантастическая четверка",
        " Люди Икс"
    ],
    "career": [
        "борец за справедливость",
        " студент",
        " фотограф"
    ],
    "superpowers": [
        "сверхчеловеческие рефлексы",
        " 'паучье чутье'",
        " способность прилепляться к твердым поверхностям",
        " производство паутины"
    ],
    "more": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)"
}, {
    "image": "<img src=img/captain_america.jpg>",
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alter_ego": "Стивен Роджерс",
    "friends": "Мстители",
    "career": "супер-солдат",
    "superpowers": [
        "сила",
        " выносливость",
        " бессмертие",
        " быстрая регенерация",
        " мастерство скрытности и боя"
    ],
    "more": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом."
}]`


let heroesCard = [];
document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);

    for (let hero of heroes) {
        heroesCard.push(`<div class="card">
                <div class="img">${hero.image}</div>        
                <h2>${hero.name}</h2>
                <div><span class="bold">Твой рейтинг:</span> <span id="userRating"></span>/10⭐</div>
                <div><span class="bold">Вселенная:</span> ${hero.universe}</div>
                <div><span class="bold">Альтер-эго:</span> ${hero.alter_ego}</div>
                <div><span class="bold">Друзья:</span> ${hero.friends}</div>
                <div><span class="bold">Род деятельности:</span> ${hero.career}</div>
                <div><span class="bold">Суперсилы:</span> ${hero.superpowers}</div>
                <div><span class="bold">Подробнее: </span><span class="italic">${hero.more}</span></div>
                <div>
                <label for="rating" class="scale">Оцени супергероя!</label>
                <select id="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
                </div>`);
    }

    showCard(heroNumber);

});

let heroNumber = 0;

function nextImage() {
    heroNumber++;
    showCard(heroNumber);
}

function previousImage() {
    heroNumber--;
    showCard(heroNumber);
}

function showCard(i) {
    let index = Math.abs(i % heroesCard.length);
    console.log(index);
    let heroImage = document.getElementById("heroesContainer");
    heroImage.innerHTML = heroesCard[index];
    let rating = localStorage.getItem("hero" + index);
    document.getElementById("userRating").innerHTML = rating;

    let ratingField = document.getElementById("rating");
    ratingField.addEventListener('change', (e) => {
        localStorage.setItem("hero" + index, ratingField.value);
        document.getElementById("userRating").innerHTML = ratingField.value;
    });
}

document.getElementById("btnPrev").onclick = previousImage;
document.getElementById("btnNext").onclick = nextImage;