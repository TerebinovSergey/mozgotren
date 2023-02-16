import { DataGame } from '../types/types';
import { getElement, createElemDOM } from '../utils/utils';

function renderRulesDescription(game: DataGame) {
  const fragment = createElemDOM('div', 'fragment');
  const card = createElemDOM('div', 'card card_single');
  const title = createElemDOM('h3', 'card__description_title uppercase', `Тренажер: ${game.nameGameRu}`);
  const containerTitle = createElemDOM('div', 'container__title');
  const img = createElemDOM('img', 'card__img');
  if (img instanceof HTMLImageElement) {
    img.alt = game.nameGameRu;
    img.src = game.image;
  }
  const containerCheck = createElemDOM('div', 'container__check');
  const containerCheckRow1 = createElemDOM('div', 'container__check_row');
  const containerCheckRow2 = createElemDOM('div', 'container__check_row');
  const containerCheckRow3 = createElemDOM('div', 'container__check_row');
  const checkImage1 = createElemDOM('div', 'check-image');
  const checkImage2 = createElemDOM('div', 'check-image');
  const checkImage3 = createElemDOM('div', 'check-image');
  const Check1 = createElemDOM(
    'h5',
    'card__check1',
    game.check1,
  );
  const Check2 = createElemDOM(
    'h5',
    'card__check2',
    game.check2,
  );
  const Check3 = createElemDOM(
    'h5',
    'card__check3',
    game.check3,
  );
  containerCheckRow1.append(checkImage1, Check1);
  containerCheckRow2.append(checkImage2, Check2);
  containerCheckRow3.append(checkImage3, Check3);
  const buttonBlock = createElemDOM('div', 'wrapper_butt_desc');
  const buttonTrain = createElemDOM(
    'button',
    'button_trane',
    'Тренироваться',
  );
  buttonTrain.setAttribute('onclick', `document.location.href = "/trenagor#${game.nameGame}"`);
  const buttonExit = createElemDOM(
    'button',
    'button_details',
    'Назад',
  );
  buttonExit.setAttribute('onclick', 'document.location.href = "/trenagors"');
  buttonBlock.append(buttonTrain, buttonExit);
  containerCheck.append(containerCheckRow1, containerCheckRow2, containerCheckRow3, buttonBlock);
  containerTitle.append(img, containerCheck);
  const hr = createElemDOM('hr', 'card__hr');
  const containerDescription = createElemDOM('div', 'container__description');

  card.append(
    title,
    containerTitle,
    hr,
    containerDescription,
  );

  const Description1 = createElemDOM(
    'p',
    'card__description',
    game.descriptionp1,
  );
  containerDescription.append(Description1);

  if (game.descriptionp2 !== undefined) {
    const Description2 = createElemDOM(
      'p',
      'card__description',
      game.descriptionp2,
    );
    containerDescription.append(Description2);
  }
  if (game.descriptionp3 !== undefined) {
    const Description3 = createElemDOM(
      'p',
      'card__description',
      game.descriptionp3,
    );
    containerDescription.append(
      Description3,
    );
  }
  const titleQuestion = createElemDOM(
    'h3',
    'card__description uppercase',
    `Что тренирует ${game.nameGameRu}:`,
  );
  containerDescription.append(titleQuestion);
  const Questionp1 = createElemDOM(
    'p',
    'card__description',
    game.questionp1,
  );
  containerDescription.append(Questionp1);

  if (game.questionp2 !== undefined) {
    const Questionp2 = createElemDOM(
      'p',
      'card__description',
      game.questionp2,
    );
    containerDescription.append(Questionp2);
  }
  if (game.questionp3 !== undefined) {
    const Questionp3 = createElemDOM(
      'p',
      'card__description',
      game.questionp3,
    );

    containerDescription.append(Questionp3);
  }
  if (game.questionp4 !== undefined) {
    const Questionp4 = createElemDOM(
      'p',
      'card__description',
      game.questionp4,
    );
    containerDescription.append(
      Questionp4,
    );
  }
  if (game.questionp5 !== undefined) {
    const Questionp5 = createElemDOM(
      'p',
      'card__description',
      game.questionp5,
    );
    containerDescription.append(
      Questionp5,
    );
  }
  if (game.questionp6 !== undefined) {
    const Questionp6 = createElemDOM(
      'p',
      'card__description',
      game.questionp6,
    );
    containerDescription.append(
      Questionp6,
    );
  }
  const titleRules = createElemDOM(
    'h3',
    'card__description uppercase',
    'Правила',
  );

  containerDescription.append(titleRules);
  const Rulesp1 = createElemDOM(
    'p',
    'card__description',
    game.rulesp1,
  );
  containerDescription.append(Rulesp1);

  if (game.rulesp2 !== undefined) {
    const Rulesp2 = createElemDOM(
      'p',
      'card__description',
      game.rulesp2,
    );
    containerDescription.append(Rulesp2);
  }
  if (game.rulesp3 !== undefined) {
    const Rulesp3 = createElemDOM(
      'p',
      'card__description',
      game.rulesp3,
    );
    containerDescription.append(Rulesp3);
  }
  if (game.rulesp4 !== undefined) {
    const Rulesp4 = createElemDOM(
      'p',
      'card__description',
      game.rulesp4,
    );
    containerDescription.append(
      Rulesp4,
    );
  }
  if (game.rulesp5 !== undefined) {
    const Rulesp5 = createElemDOM(
      'p',
      'card__description',
      game.rulesp5,
    );
    containerDescription.append(Rulesp5);
  }

  const titleScore = createElemDOM(
    'h3',
    'card__description uppercase',
    'Начисление очков',
  );

  containerDescription.append(titleScore);
  const Score1 = createElemDOM(
    'p',
    'card__description',
    'Формула начисления баллов за правильный ответ выглядит так:',
  );
  containerDescription.append(Score1);

  const Score2 = createElemDOM(
    'p',
    'card__description',
    'Ваша сумма очков + КС*Уровень',
  );
  containerDescription.append(Score2);

  const Score3 = createElemDOM(
    'p',
    'card__description',
    'КС – коэффициент сложности, он зависит от настроек сложности выбранных до начала теста, эту цифру вы сможете увидеть в верхнем левом углу рабочего поля. При усложнении настроек повышается коэффициент сложности.',
  );
  containerDescription.append(Score3);

  const Score4 = createElemDOM(
    'p',
    'card__description',
    'Уровень – это не постоянная величина, в начале тренировки он имеет минимальное значение и растет на одну позицию с каждым правильным ответом. При неправильном ответе, уровень стает ниже на позицию.',
  );
  containerDescription.append(
    Score4,
  );

  const Score5 = createElemDOM(
    'p',
    'card__description',
    'Формула вычитания баллов за неправильный ответ выглядит так:',
  );
  containerDescription.append(Score5);

  const Score6 = createElemDOM(
    'p',
    'card__description',
    'Ваша сумма очков – (КС*Уровень)/2',
  );
  containerDescription.append(Score6);

  const Score7 = createElemDOM(
    'p',
    'card__description',
    'При этом в минусовые значения сумма очков не заходит.',
  );
  containerDescription.append(Score7);

  fragment.append(card);

  const container = getElement('.trenagors-container');
  container.innerHTML = '';
  container.append(fragment);
  const popap = getElement('.popap');
  popap.innerHTML = '';
  popap.append(fragment);
}

export default renderRulesDescription;
