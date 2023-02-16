/* eslint-disable no-cond-assign */
import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';
import { SessionData, DataGame } from '../types/types';
import { popupVisibility } from '../components/popup-header/popupHeader';
import './game.css';

export default class GamePage {
  nameGame: string;
  check1: string;
  check2: string;
  check3: string;
  descriptionp1?: string;
  descriptionp2?: string;
  descriptionp3?: string;
  questionp1?: string;
  questionp2?: string;
  questionp3?: string;
  questionp4?: string;
  questionp5?: string;
  questionp6?: string;
  rulesp1?: string;
  rulesp2?: string;
  rulesp3?: string;
  rulesp4?: string;
  rulesp5?: string;
  complexity: number;
  nameGameRu: string;
  logo: string;
  levels: number;
  taskDescription: string;

  constructor(param: DataGame) {
    this.nameGame = param.nameGame;
    this.check1 = param.check1;
    this.check2 = param.check2;
    this.check3 = param.check3;
    this.descriptionp1 = param.descriptionp1;
    this.descriptionp2 = param.descriptionp2;
    this.descriptionp3 = param.descriptionp3;
    this.questionp1 = param.questionp1;
    this.questionp2 = param.questionp2;
    this.questionp3 = param.questionp3;
    this.questionp4 = param.questionp4;
    this.questionp5 = param.questionp5;
    this.questionp6 = param.questionp6;
    this.rulesp1 = param.rulesp1;
    this.rulesp2 = param.rulesp2;
    this.rulesp3 = param.rulesp3;
    this.rulesp4 = param.rulesp4;
    this.rulesp5 = param.rulesp5;
    this.complexity = param.basicComplexity;
    this.nameGameRu = param.nameGameRu;
    this.logo = param.logoImg;
    this.levels = param.levels;
    this.taskDescription = param.taskDescription;
  }

  draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    this.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  drawGameStart(): void {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const gameWrapper = getElement('.game-container-wrapper', gameContainer);
    gameWrapper.innerHTML = `
      ${this.getNavigationHTML()}
      ${this.getGameWrapperHTML()}`;
  }

  drawGameResult() {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const gameWrapper = getElement('.game-container-wrapper', gameContainer);
    gameWrapper.innerHTML = `
      ${this.getNavigationHTML()}
      ${this.getInformationHTML()}
      ${this.getResultHTML()}
      ${this.getSettingsGameHTML()}`;
  }

  private drawMain() {
    const main = document.createElement('main');
    main.classList.add('game-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
    popupVisibility();
    GamePage.popapOpen();
  }

  private getMainHTML(): string {
    return `
    <div class="body-background-shaddow"></div>
    <div class="body-background-shaddow-description"></div>
    <div class="popap hidden_popap">
      <div class="close"></div>
      <div class="container__description">
        <h3 class="card__description_title uppercase">${this.nameGameRu}</h3>
        <div class="container__description">
          <p class="card__description">${this.descriptionp1}</p>
          <p class="card__description">${this.descriptionp2}</p>
          <p class="card__description">${this.descriptionp3}</p>
          <p class="card__description uppercase"><strong>Что тренирует ${this.nameGameRu}</strong></h3>
          <p class="card__description">${this.questionp1}</p>
          <p class="card__description">${this.questionp2}</p>
          <p class="card__description">${this.questionp3}</p>
          <p class="card__description">${this.questionp4}</p>
          <p class="card__description">${this.questionp5}</p>
          <p class="card__description">${this.questionp6}</p>
          <p class="card__description uppercase"><strong>Правила:</strong></h3>
          <p class="card__description">${this.rulesp1}</p>
          <p class="card__description">${this.rulesp2}</p>
          <p class="card__description">${this.rulesp3}</p>
          <p class="card__description">${this.rulesp4}</p>
          <p class="card__description">${this.rulesp5}</p>
          <h3 class="card__description uppercase"><strong>Начисление очков</strong></h3>
          <p class="card__description">Формула начисления баллов за правильный ответ выглядит так:</p>
          <p class="card__description">Ваша сумма очков + КС*Уровень</p>
          <p class="card__description">КС – коэффициент сложности, он зависит от настроек сложности выбранных до начала теста, эту цифру вы сможете увидеть в верхнем левом углу рабочего поля. При усложнении настроек повышается коэффициент сложности.</p>
          <p class="card__description">Уровень – это не постоянная величина, в начале тренировки он имеет минимальное значение и растет на одну позицию с каждым правильным ответом. При неправильном ответе, уровень стает ниже на позицию.</p>
          <p class="card__description">Формула вычитания баллов за неправильный ответ выглядит так:</p>
          <p class="card__description">Ваша сумма очков – (КС*Уровень)/2</p>
          <p class="card__description">При этом в минусовые значения сумма очков не заходит.</p>
        </div>
      </div>
    </div>
    <div class="game-container game-container-${this.nameGame}">
      <div class="game-container-wrapper">
        ${this.getNavigationHTML()}
        ${this.getInformationHTML()}
        ${this.getSettingsGameHTML()}
      </div>
    </div>`;
  }

  private getInformationHTML(): string {
    return `
    <div class="information">
      <hr class="shadow">
      <div class="information-container">
        <div class="info-title-container">
          <div class="game-logo" style="background-image: url(${this.logo})"></div>
          <div class="title-container">
            <h2 class="game-title">${this.nameGameRu}</h2>
            <h5 class="game-difficult"> Коэффициент сложности: <b>${this.complexity}</b></h5>
          </div>
        </div>
        <ul class="check-container">
          <li class="check-item"><div class="check check1"></div><h5>${this.check1}</h5></li>
          <li class="check-item"><div class="check check2"></div><h5>${this.check2}</h5></li>
          <li class="check-item"><div class="check check3"></div><h5>${this.check3}</h5></li>
        </ul>
      </div>
    </div>`;
  }

  private getSettingsGameHTML(): string {
    return `
    <div class="form-container">
      <hr class="separator">
      <button class="button btn-start-game">
        <span class="">Начать тренировку</span>
      </button>
      <a class="game-rules" href="#">
        <h5>Правила игры</h5>
        <div class="question"></div>
      </a>
      <h5> Пригласите друзей на тренировку: </h5>
      <ul class="link-container">
        <li class="link-item"><a href="https://www.facebook.com/"><div class="facebook"></div></a></li>
        <li class="link-item"><a href="https://ok.ru/"><div class="odnoklassniki"></div></a></li>
        <li class="link-item"><a href="https://https://login.microsoftonline.com/"><div class="open-letter"></div></a></li>
      </ul>
    </div>`;
  }

  private getResultHTML(): string {
    // <cicle class="percentages-circle">
    //    <div class="percentages"><h5 class="score-percent">100%</h5></div>
    //  </cicle>
    return `
    <div class="result-container">
      ${this.getCircleBar()}
      <div class="percentages"><h5 class="score-percent">100%</h5></div>
      <div class="result-container-block">
        <h5 class="results-title">РЕЗУЛЬТАТ:</h5><span class="number big game-total-score">90</span>
        <div class="result-row"><h6 class="results-success">Правильных:</h6><span class="number green rigth-answers">9</span></div>
        <div class="result-row"><h6 class="results-errors">Неправильных:</h6><span class="number red wrong-answers">0</span></div>
      </div>
    </div>`;
  }

  private getGameWrapperHTML(): string {
    return `
    <div class="info-bar">
      <h5 class="intro-p">${this.taskDescription}</h5>
      <div class="button-close-start">
        <button class="button-close">
          <div class="close-small"></div>
        </button>
      </div>
    </div>
    <div class="time-ruler-red"></div>
    <div class="time-ruler"></div>
    <div class="game-${this.nameGame}"></div>`;
  }

  private getNavigationHTML(): string {
    return `
    <div class="navigation">
      <button type="button" class="button-navigation">
        <div class="check-mark"></div>
        <span  class="grey text">Очки: </span>
        <span><b class="white game-score-title"> 0 </b></span>
      </button>
      <div class="navigation-block">
        <button type="button" class="button-navigation">
          <div class="flag"></div>
            <span class="grey text">Уровень: </span>
            <span><b class="white game-level-title">1 / </b></span>
            <span><b class="grey game-max-level-title">${this.levels}</b> </span>
        </button>
        <button type="button" class="button-navigation">
          <div class="stopwatch"></div>
          <span class="grey text">Время: </span><span><b class="white game-time-title">60</b></span>
        </button>
      </div>
    </div>`;
  }

  private getCircleBar() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="24.615384615384617 24.615384615384617 49.23076923076923 49.23076923076923" style="transform: rotate(-90deg);"><circle fill="transparent" cx="49.23076923076923" cy="49.23076923076923" r="20" stroke-width="9.230769230769232" stroke-dasharray="125.664" stroke-dashoffset="0" class="progress_answer"></circle><circle fill="transparent" cx="49.23076923076923" cy="49.23076923076923" r="20" stroke-width="9.230769230769232" stroke-dasharray="125.664" stroke-dashoffset="125.664" class="progress_answer__overlay"></circle></svg>';
  }

  static popapOpen(): void {
    const gameRules = getElement('.game-rules');
    gameRules.addEventListener('click', () => {
      document.querySelector('.popap')?.classList.toggle('hidden_popap');
      document.querySelector('.body-background-shaddow-description')?.classList.toggle('hidden_desc');
    });
    const gameRulesArea = getElement('.body-background-shaddow-description');
    gameRulesArea.addEventListener('click', () => {
      document.querySelector('.popap')?.classList.toggle('hidden_popap');
      document.querySelector('.body-background-shaddow-description')?.classList.toggle('hidden_desc');
    });
    const close = getElement('.close');
    close.addEventListener('click', () => {
      document.querySelector('.popap')?.classList.toggle('hidden_popap');
      document.querySelector('.body-background-shaddow-description')?.classList.toggle('hidden_desc');
    });
  }
}
