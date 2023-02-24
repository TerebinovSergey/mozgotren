const scoreList = [
  {
    id: '1',
    name: 'Роутинг',
    score: 15,
    scoreLimit: 15,
  },
  {
    id: '2',
    name: 'Организация сервера 140 / 140',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Использован REST API',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Обработка preflight CORS',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Подключение и работа с БД',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Используется локальная БД',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Используется ORM(mongoose)',
    score: null,
    scoreLimit: null,
  },
  {
    id: '-',
    name: 'Реализован nodejs и express',
    score: null,
    scoreLimit: null,
  },
  {
    id: '2.1',
    name: 'Регистрация',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '2.2',
    name: 'Аутентификация',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '2.3',
    name: 'Авторизация',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '2.4',
    name: 'Приложение отображает статистику, данные для которых получает от бэкенда',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '2.5',
    name: 'Реализована работа с изображениями',
    score: 5,
    scoreLimit: 5,
  },
  {
    id: '2.6',
    name: 'Сервер отдает корректные ответы, отдает HTTP ошибки с нормальным body, по которым можно понять, что произошло, пишет читаемые логи',
    score: 15,
    scoreLimit: 15,
  },
  {
    id: '3 ',
    name: 'Блок игры 280 / 350',
    score: null,
    scoreLimit: null,
  },
  {
    id: '3.1',
    name: 'Создание базового класса для игр',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '3.2',
    name: 'Создание базового контроллера для игр 40 / 40',
    score: null,
    scoreLimit: null,
  },
  {
    id: '3.2.1',
    name: 'Старт и стоп',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '3.2.2',
    name: 'Организация подсчета очков, анимация процентов, количество удач и неудач',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '3.2.3',
    name: 'Организация перехода от уровня к уровню',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '3.2.4',
    name: 'Таймер; анимация-таймлайн',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '3.3',
    name: 'Игры: 210/280',
    score: null,
    scoreLimit: null,
  },
  {
    id: '3.3.1',
    name: 'Блок арифметических игр: "Арифметика"; "Сложение"; "Вычитание"; "Деление"; "Умножение"',
    score: 60,
    scoreLimit: 60,
  },
  {
    id: '3.3.2',
    name: 'Блок Шульте: "Таблица Шульте"; "Шульте-алфавит"; "Шульте-цвет"',
    score: 40,
    scoreLimit: 40,
  },
  {
    id: '3.3.3',
    name: 'Блок игр-сортировщиков, реализация drag-and-drop: "Сортировщик цифр"; "Сортировщик слов", "Сортировщик цветов"',
    score: 45,
    scoreLimit: 45,
  },
  {
    id: '3.3.4',
    name: 'Блок игр на эрудицию по типу вопрос-ответ: "Пара: Страна-Столица"; "Пара: Страна-Флаг"; "Пара: Страна - Валюта"; "Английский словарь"; "Пара: Книга - Автор"; "Пара: Цитата - Автор"',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '3.3.5',
    name: 'Блок игр по типу лишний элемент: "Лишнее слово"; "Лишнее число"; "Фейсконтроль"',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '3.3.6',
    name: 'Игра "Цифровая маска"',
    score: 5,
    scoreLimit: 5,
  },
  {
    id: '3.3.7',
    name: 'Игра "Мемори"',
    score: 0,
    scoreLimit: 7,
  },
  {
    id: '3.3.8',
    name: 'Игра "Матрица"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.9',
    name: 'Игра "Аэродром"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.10',
    name: 'Игра "Морской бой"',
    score: 0,
    scoreLimit: 7,
  },
  {
    id: '3.3.11',
    name: 'Игра "Ход конем"',
    score: 0,
    scoreLimit: 7,
  },
  {
    id: '3.3.12',
    name: 'Игра "Дабл"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.13',
    name: 'Игра "Сортировщик"',
    score: 0,
    scoreLimit: 7,
  },
  {
    id: '3.3.14',
    name: 'Игра "Углосум"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.15',
    name: 'Игра "Суммоцвет"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.16',
    name: 'Игра "Машина времени"',
    score: 0,
    scoreLimit: 7,
  },
  {
    id: '3.3.17',
    name: 'Игра "Эрудит"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '3.3.18',
    name: 'Игра "Силуэт страны"',
    score: 0,
    scoreLimit: 5,
  },
  {
    id: '4 ',
    name: 'Блок рейтинг 30 / 30',
    score: null,
    scoreLimit: null,
  },
  {
    id: '4.1',
    name: 'Рейтинг по играм; данные получаются с сервера',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '4.2',
    name: 'Рейтинг общий; данные получаются с сервера',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '5',
    name: 'Адаптивный дизайн',
    score: 30,
    scoreLimit: 30,
  },
  {
    id: '6',
    name: 'Анимация главной страницы 22 / 25',
    score: null,
    scoreLimit: null,
  },
  {
    id: '6.1',
    name: 'Анимация логотипа',
    score: 2,
    scoreLimit: 3,
  },
  {
    id: '6.2',
    name: 'Анимация фона с логотипом',
    score: 5,
    scoreLimit: 5,
  },
  {
    id: '6.3',
    name: 'Слайдер память-внимание-мышление',
    score: 10,
    scoreLimit: 12,
  },
  {
    id: '6.4',
    name: 'Слайдер с телефоном',
    score: 5,
    scoreLimit: 5,
  },
  {
    id: '7',
    name: 'Блок профайл 25 / 30',
    score: null,
    scoreLimit: null,
  },
  {
    id: '7.1',
    name: 'Валидация всех инпутов; обработка инпут селект',
    score: 5,
    scoreLimit: 5,
  },
  {
    id: '7.2',
    name: 'Сохранение настроек профиля; сохранение нового пароля; сохранение изображения',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '7.3',
    name: 'Подсчет количества тренировок и запись их в карточку, выбор любимой игры по максимальному времени на конкретную игру',
    score: 10,
    scoreLimit: 10,
  },
  {
    id: '7.4',
    name: 'Подсчет возраста по дате рождения',
    score: 0,
    scoreLimit: 5,
  },
];

const list = scoreList.filter((el) => el.score !== null || el.scoreLimit !== null);
console.log(list);

const sum = list.reduce((accumulator, object) => accumulator + Number(object.score), 0);
const sumLimit = list.reduce((accumulator, object) => accumulator + Number(object.scoreLimit), 0);

const resultScore = Object.values(scoreList.map((el) => [
  el.id, el.name, el.score, '/', el.scoreLimit, ';', '\n',
]));
console.log(resultScore.join('').replace(/,/g, ' '));

console.log(`${sum}/${sumLimit}`);
