import { DataGame } from '../types/types';
import { createElemDOM } from '../utils/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function renderRulesDescription({
  nameGameRu, image, check1, check2, check3,
  descriptionp1, descriptionp2, descriptionp3,
  questionp1, questionp2, questionp3, questionp4, questionp5, questionp6,
  rulesp1, rulesp2, rulesp3, rulesp4, rulesp5,
}: DataGame) {
  const fragment = document.createDocumentFragment();

  const card = createElemDOM('div', 'card card_single');
  const title = createElemDOM('h3', 'card__title uppercase', `Тренажер: ${nameGameRu}`);
  const containerTitle = createElemDOM('div', 'container__title');
  const img = createElemDOM('img', 'img');
  if (img instanceof HTMLImageElement) {
    img.alt = nameGameRu;
    img.src = image;
  }
  const containerCheck = createElemDOM('div', 'container__check');
  const Check1 = createElemDOM(
    'p',
    'card__check1',
    check1,
  );
  const Check2 = createElemDOM(
    'p',
    'card__check2',
    check2,
  );
  const Check3 = createElemDOM(
    'p',
    'card__check3',
    check3,
  );
  const buttonTrain = createElemDOM(
    'button',
    'button_trane',
    'Тренироваться',
  );
  containerCheck.append(Check1, Check2, Check3, buttonTrain);
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
    descriptionp1,
  );
  containerDescription.append(Description1);

  if (descriptionp2 !== undefined) {
    const Description2 = createElemDOM(
      'p',
      'card__description',
      descriptionp2,
    );
    containerDescription.append(Description2);
  }
  if (descriptionp3 !== undefined) {
    const description2 = createElemDOM(
      'p',
      'card__description',
      descriptionp3,
    );
    containerDescription.append(
      description2,
    );
  }
  const titleQuestion = createElemDOM(
    'h3',
    'card__description uppercase',
    `Что тренирует ${nameGameRu}:`,
  );
  containerDescription.append(titleQuestion);
  const Questionp1 = createElemDOM(
    'p',
    'card__description',
    questionp1,
  );
  containerDescription.append(Questionp1);

  if (questionp2 !== undefined) {
    const Questionp2 = createElemDOM(
      'p',
      'card__description',
      questionp2,
    );
    containerDescription.append(Questionp2);
  }
  if (questionp3 !== undefined) {
    const Questionp3 = createElemDOM(
      'p',
      'card__description',
      questionp3,
    );

    containerDescription.append(Questionp3);
  }
  if (questionp4 !== undefined) {
    const Questionp4 = createElemDOM(
      'p',
      'card__description',
      questionp4,
    );
    containerDescription.append(
      Questionp4,
    );
  }
  if (questionp5 !== undefined) {
    const Questionp5 = createElemDOM(
      'p',
      'card__description',
      questionp5,
    );
    containerDescription.append(
      Questionp5,
    );
  }
  if (questionp6 !== undefined) {
    const Questionp6 = createElemDOM(
      'p',
      'card__description',
      questionp6,
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
    rulesp1,
  );
  containerDescription.append(Rulesp1);

  if (rulesp2 !== undefined) {
    const Rulesp2 = createElemDOM(
      'p',
      'card__description',
      rulesp2,
    );
    containerDescription.append(Rulesp2);
  }
  if (rulesp3 !== undefined) {
    const Rulesp3 = createElemDOM(
      'p',
      'card__description',
      rulesp3,
    );
    containerDescription.append(Rulesp3);
  }
  if (rulesp4 !== undefined) {
    const Rulesp4 = createElemDOM(
      'p',
      'card__description',
      rulesp4,
    );
    containerDescription.append(
      Rulesp4,
    );
  }
  if (rulesp5 !== undefined) {
    const Rulesp5 = createElemDOM(
      'p',
      'card__description',
      rulesp5,
    );
    containerDescription.append(Rulesp5);
  }

  fragment.append(card);
}
