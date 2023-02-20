const scoreList = [
  {
    id: '1 ',
    id_id: '',
    name: 'Организация сервера 140 / 140',
    score: null,
    scoreLimit: null,
  },
  {
    id: '1',
    id_id: '.1',
    name: 'Создание сервера',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '1',
    id_id: '.2',
    name: 'Регистрация пользователя',
    score: 20,
    scoreLimit: 20,
  },

  {
    id: '2 ',
    id_id: '',
    name: 'Блок игры 220 / 330',
    score: null,
    scoreLimit: null,
  },
  {
    id: '2',
    id_id: '.1',
    name: 'Создание базового класса для игр',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '2',
    id_id: '.2',
    name: 'Создание контроллера для игр',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '2',
    id_id: '.3',
    name: 'Организация подсчета очков',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '2',
    id_id: '.4',
    name: 'Создание игры - Сортировщик слов',
    score: 8,
    scoreLimit: 8,
  },
  {
    id: '2',
    id_id: '.5',
    name: 'Создание игры - Мемори',
    score: 0,
    scoreLimit: 8,
  },
  {
    id: '2',
    id_id: '.6',
    name: 'Создание игры - Сортировщик цифр',
    score: 8,
    scoreLimit: 8,
  },

  {
    id: '3 ',
    id_id: '',
    name: 'Блок рейтинг 30 / 30',
    score: null,
    scoreLimit: null,
  },
  {
    id: '3',
    id_id: '.1',
    name: 'Рейтинг по играм, данные получаются с сервера',
    score: 20,
    scoreLimit: 20,
  },
  {
    id: '3',
    id_id: '.2',
    name: 'Рейтинг общий, данные получаются с сервера',
    score: 10,
    scoreLimit: 10,
  },

];

const list = scoreList.filter((el) => el.score !== null || el.scoreLimit !== null);
console.log(list);

const sum = list.reduce((accumulator, object) => accumulator + Number(object.score), 0);
const sumLimit = list.reduce((accumulator, object) => accumulator + Number(object.scoreLimit), 0);

const resultScore = Object.values(scoreList.map((el) => [
  el.id, el.id_id, el.name, el.score, '/', el.scoreLimit, ';', '\n',
]));
console.log(resultScore.join('').replace(/,/g, ' '));

console.log(`${sum}/${sumLimit}`);
