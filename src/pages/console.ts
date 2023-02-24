const scoreList = [
  {
    id: '1',
    name: 'Роутинг (всего: 15)',
    score: 15,
  },
  {
    id: '2',
    name: 'Организация сервера (всего: 140)',
    score: null,
  },
  {
    id: '-',
    name: 'Использован REST API',
    score: null,
  },
  {
    id: '-',
    name: 'Обработка preflight CORS',
    score: null,
  },
  {
    id: '-',
    name: 'Подключение и работа с БД',
    score: null,
  },
  {
    id: '-',
    name: 'Используется локальная БД',
    score: null,
  },
  {
    id: '-',
    name: 'Используется ORM(mongoose)',
    score: null,
  },
  {
    id: '-',
    name: 'Реализован nodejs и express',
    score: null,
  },
  {
    id: '2.1',
    name: 'Регистрация',
    score: 30,
  },
  {
    id: '2.2',
    name: 'Аутентификация',
    score: 30,
  },
  {
    id: '2.3',
    name: 'Авторизация',
    score: 30,
  },
  {
    id: '2.4',
    name: 'Приложение отображает статистику, данные для которых получает от бэкенда',
    score: 30,
  },
  {
    id: '2.5',
    name: 'Реализована работа с изображениями',
    score: 5,
  },
  {
    id: '2.6',
    name: 'Сервер отдает корректные ответы, отдает HTTP ошибки с нормальным body, по которым можно понять, что произошло, пишет читаемые логи',
    score: 15,
  },
  {
    id: '3 ',
    name: 'Блок игры (всего: 280)',
    score: null,
  },
  {
    id: '3.1',
    name: 'Создание базового класса для игр (всего: 30)',
    score: 30,
  },
  {
    id: '3.2',
    name: 'Создание базового контроллера для игр (всего: 40)',
    score: null,
  },
  {
    id: '3.2.1',
    name: 'Старт и стоп',
    score: 10,
  },
  {
    id: '3.2.2',
    name: 'Организация подсчета очков; анимация процентов; количество удач и неудач',
    score: 10,
  },
  {
    id: '3.2.3',
    name: 'Организация перехода от уровня к уровню',
    score: 10,
  },
  {
    id: '3.2.4',
    name: 'Таймер; анимация-таймлайн',
    score: 10,
  },
  {
    id: '3.3',
    name: 'Игры: (всего: 210)',
    score: null,
  },
  {
    id: '3.3.1',
    name: 'Блок арифметических игр: "Арифметика"; "Сложение"; "Вычитание"; "Деление"; "Умножение"',
    score: 60,
  },
  {
    id: '3.3.2',
    name: 'Блок Шульте: "Таблица Шульте"; "Шульте-алфавит"; "Шульте-цвет"',
    score: 40,
  },
  {
    id: '3.3.3',
    name: 'Блок игр-сортировщиков, реализация drag-and-drop: "Сортировщик цифр"; "Сортировщик слов", "Сортировщик цветов"',
    score: 45,
  },
  {
    id: '3.3.4',
    name: 'Блок игр на эрудицию по типу вопрос-ответ: "Пара: Страна-Столица"; "Пара: Страна-Флаг"; "Пара: Страна - Валюта"; "Английский словарь"; "Пара: Книга - Автор"; "Пара: Цитата - Автор"',
    score: 30,
  },
  {
    id: '3.3.5',
    name: 'Блок игр по типу лишний элемент: "Лишнее слово"; "Лишнее число"; "Фейсконтроль"',
    score: 30,
  },
  {
    id: '3.3.6',
    name: 'Игра "Цифровая маска"',
    score: 10,
  },
  {
    id: '4 ',
    name: 'Блок рейтинг (всего: 30)',
    score: null,
  },
  {
    id: '4.1',
    name: 'Рейтинг по играм; данные получаются с сервера',
    score: 20,
  },
  {
    id: '4.2',
    name: 'Рейтинг общий; данные получаются с сервера',
    score: 10,
  },
  {
    id: '5',
    name: 'Адаптивный дизайн (всего: 30)',
    score: 30,
  },
  {
    id: '6',
    name: 'Анимация главной страницы (всего: 22)',
    score: null,
  },
  {
    id: '6.1',
    name: 'Анимация логотипа',
    score: 2,
  },
  {
    id: '6.2',
    name: 'Анимация фона с логотипом',
    score: 5,
  },
  {
    id: '6.3',
    name: 'Слайдер память-внимание-мышление',
    score: 10,
  },
  {
    id: '6.4',
    name: 'Слайдер с телефоном',
    score: 5,
  },
  {
    id: '7',
    name: 'Блок профайл (всего: 30)',
    score: null,
  },
  {
    id: '7.1',
    name: 'Валидация всех инпутов; обработка инпут селект',
    score: 5,
  },
  {
    id: '7.2',
    name: 'Сохранение настроек профиля; сохранение нового пароля; сохранение изображения',
    score: 10,
  },
  {
    id: '7.3',
    name: 'Подсчет количества тренировок и запись их в карточку, выбор любимой игры по максимальному времени на конкретную игру',
    score: 10,
  },
  {
    id: '7.4',
    name: 'Подсчет возраста по дате рождения - не работает',
    score: 5,
  },
];

const sum = scoreList.reduce((accumulator, object) => accumulator + Number(object.score), 0);

const resultScore = Object.values(scoreList.map((el) => [
  el.id, el.name, el.score, ';', '\n',
]));

console.log(resultScore.join('').replace(/,/g, ' '));

console.log('Итого:', `${sum}/${620}`);
