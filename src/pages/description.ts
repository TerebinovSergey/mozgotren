// import { DataGame } from '../types/types';
// import { getElement } from '../utils/utils';

function renderRulesDescription() {
  console.log('gg');
}

export default renderRulesDescription;
  // const container = document.querySelector('.trenagors-container') as HTMLDivElement;
  // container.innerHTML = '';
  // const fragment = createElemDOM('div', 'fragment');

  // const card = createElemDOM('div', 'card card_single');
  // const title = createElemDOM('h3', 'card__title uppercase', `Тренажер: ${game.nameGameRu}`);
  // const containerTitle = createElemDOM('div', 'container__title');
  // const img = createElemDOM('img', 'img');
  // if (img instanceof HTMLImageElement) {
  //   img.alt = game.nameGameRu;
  //   img.src = game.image;
  // }
  // const containerCheck = createElemDOM('div', 'container__check');
  // const Check1 = createElemDOM(
  //   'p',
  //   'card__check1',
  //   game.check1,
  // );
  // const Check2 = createElemDOM(
  //   'p',
  //   'card__check2',
  //   game.check2,
  // );
  // const Check3 = createElemDOM(
  //   'p',
  //   'card__check3',
  //   game.check3,
  // );
  // const buttonTrain = createElemDOM(
  //   'button',
  //   'button_trane',
  //   'Тренироваться',
  // );
  // containerCheck.append(Check1, Check2, Check3, buttonTrain);
  // containerTitle.append(img, containerCheck);
  // const hr = createElemDOM('hr', 'card__hr');
  // const containerDescription = createElemDOM('div', 'container__description');

  // card.append(
  //   title,
  //   containerTitle,
  //   hr,
  //   containerDescription,
  // );

  // const Description1 = createElemDOM(
  //   'p',
  //   'card__description',
  //   game.descriptionp1,
  // );
  // containerDescription.append(Description1);

  // if (game.descriptionp2 !== undefined) {
  //   const Description2 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.descriptionp2,
  //   );
  //   containerDescription.append(Description2);
  // }
  // if (game.descriptionp3 !== undefined) {
  //   const description2 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.descriptionp3,
  //   );
  //   containerDescription.append(
  //     description2,
  //   );
  // }
  // const titleQuestion = createElemDOM(
  //   'h3',
  //   'card__description uppercase',
  //   `Что тренирует ${game.nameGameRu}:`,
  // );
  // containerDescription.append(titleQuestion);
  // const Questionp1 = createElemDOM(
  //   'p',
  //   'card__description',
  //   game.questionp1,
  // );
  // containerDescription.append(Questionp1);

  // if (game.questionp2 !== undefined) {
  //   const Questionp2 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.questionp2,
  //   );
  //   containerDescription.append(Questionp2);
  // }
  // if (game.questionp3 !== undefined) {
  //   const Questionp3 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.questionp3,
  //   );

  //   containerDescription.append(Questionp3);
  // }
  // if (game.questionp4 !== undefined) {
  //   const Questionp4 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.questionp4,
  //   );
  //   containerDescription.append(
  //     Questionp4,
  //   );
  // }
  // if (game.questionp5 !== undefined) {
  //   const Questionp5 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.questionp5,
  //   );
  //   containerDescription.append(
  //     Questionp5,
  //   );
  // }
  // if (game.questionp6 !== undefined) {
  //   const Questionp6 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.questionp6,
  //   );
  //   containerDescription.append(
  //     Questionp6,
  //   );
  // }
  // const titleRules = createElemDOM(
  //   'h3',
  //   'card__description uppercase',
  //   'Правила',
  // );

  // containerDescription.append(titleRules);
  // const Rulesp1 = createElemDOM(
  //   'p',
  //   'card__description',
  //   game.rulesp1,
  // );
  // containerDescription.append(Rulesp1);

  // if (game.rulesp2 !== undefined) {
  //   const Rulesp2 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.rulesp2,
  //   );
  //   containerDescription.append(Rulesp2);
  // }
  // if (game.rulesp3 !== undefined) {
  //   const Rulesp3 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.rulesp3,
  //   );
  //   containerDescription.append(Rulesp3);
  // }
  // if (game.rulesp4 !== undefined) {
  //   const Rulesp4 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.rulesp4,
  //   );
  //   containerDescription.append(
  //     Rulesp4,
  //   );
  // }
  // if (game.rulesp5 !== undefined) {
  //   const Rulesp5 = createElemDOM(
  //     'p',
  //     'card__description',
  //     game.rulesp5,
  //   );
  //   containerDescription.append(Rulesp5);
  // }

  // fragment.append(card);

  // const container = getElement('.trenagors-container');
  // container.innerHTML = '';
  // container.append(fragment);
//  return `<div class="card card_single">
//   <h3 class="card__title uppercase">${game.nameGameRu}</h3>
//   <div class="container__title">
//     <img class="img" alt="Умножение" src="${game.image}">
//     <div class="container__check">
//       <p class="card__check1">${game.check1}</p>
//       <p class="card__check2">${game.check2}</p>
//       <p class="card__check3">${game.check3}</p>
//       <button class="button_trane">Тренироваться</button>
//     </div>
//   </div>
//   <hr class="card__hr">
//   <div class="container__description">
//     <p class="card__description">${game.descriptionp1}</p>
//     <p class="card__description">${game.descriptionp2}</p>
//   </div>
// </div>
// ` 



