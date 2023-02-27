# mozgotren-clone

Стек:
typescript

Deploy: https://mozgotren-clone.netlify.app
Backend: https://github.com/alexbrestby/mozgotren-api

Как пользоваться приложением.

1. Регистрируемя. Заполняем личный кабинет.
2. Играем в игры на вкладке тренажеры. (Правила игры в описании игры).
3. Смотрим рейтинг на странице рейтинг.

## Оценка:

1 Роутинг (всего: 15) 15 ;
2 Организация сервера (всего: 140) ;

- Использован REST API ;
- Обработка preflight CORS ;
- Подключение и работа с БД ;
- Используется локальная БД ;
- Используется ORM(mongoose) ;
- Реализован nodejs и express ;
  2.1 Регистрация 30 ;
  2.2 Аутентификация 30 ;
  2.3 Авторизация 30 ;
  2.4 Приложение отображает статистику данные для которых получает от бэкенда 30 ;
  2.5 Реализована работа с изображениями 5 ;
  2.6 Сервер отдает корректные ответы отдает HTTP ошибки с нормальным body по которым можно понять что произошло пишет читаемые логи 15 ;
  3 Блок игры (всего: 280) ;
  3.1 Создание базового класса для игр (всего: 30) 30 ;
  3.2 Создание базового контроллера для игр (всего: 40) ;
  3.2.1 Старт и стоп 10 ;
  3.2.2 Организация подсчета очков; анимация процентов; количество удач и неудач 10 ;
  3.2.3 Организация перехода от уровня к уровню 10 ;
  3.2.4 Таймер; анимация-таймлайн 10 ;
  3.3 Игры: (всего: 210) ;
  3.3.1 Блок арифметических игр: "Арифметика"; "Сложение"; "Вычитание"; "Деление"; "Умножение" 55 ;
  3.3.2 Блок Шульте: "Таблица Шульте"; "Шульте-алфавит"; "Шульте-цвет" 40 ;
  3.3.3 Блок игр-сортировщиков реализация drag-and-drop: "Сортировщик цифр"; "Сортировщик слов" "Сортировщик цветов" 45 ;
  3.3.4 Блок игр на эрудицию по типу вопрос-ответ: "Пара: Страна-Столица"; "Пара: Страна-Флаг"; "Пара: Страна - Валюта"; "Английский словарь"; "Пара: Книга - Автор"; "Пара: Цитата - Автор" 30 ;
  3.3.5 Блок игр по типу лишний элемент: "Лишнее слово"; "Лишнее число"; "Фейсконтроль" 30 ;
  3.3.6 Игра "Цифровая маска" 10 ;
  4 Блок рейтинг (всего: 30) ;
  4.1 Рейтинг по играм; в первую очередь выводятся сыгранные игры; место в рейтенге; данные получаются с сервера 20 ;
  4.2 Рейтинг общий; данные получаются с сервера 10 ;
  5 Адаптивный дизайн (всего: 30) ;
  6 Анимация главной страницы (всего: 22) ;
  6.1 Анимация логотипа 2 ;
  6.2 Анимация фона с логотипом 5 ;
  6.3 Слайдер память-внимание-мышление 10 ;
  6.4 Слайдер с телефоном 5 ;
  7 Блок профайл (всего: 30) ;
  7.1 Валидация всех инпутов; обработка инпут селект 5 ;
  7.2 Сохранение настроек профиля; сохранение нового пароля; сохранение изображения 10 ;
  7.3 Подсчет количества тренировок и отображение любимой игры по максимальному времени 10;
  7.4 Подсчет возраста по дате рождения 5 ;

Итого: 547/620
