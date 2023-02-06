import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class GamePage {
  nameGame: string;

  constructor(nameGame: string) {
    this.nameGame = nameGame;
  }

  draw(): void {
    const header = new HeaderView();
    header.draw();
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

  drawGemeResult() {
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
  }

  private getMainHTML(): string {
    return `
    <div class="body-background-shaddow" 
    onclick="document.querySelector('.nav-aside')?.classList.toggle('active'); 
             document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
             document.querySelector('.open')?.classList.toggle('hidden1');
             document.querySelector('.close')?.classList.toggle('hidden1');
           "></div>
    <div class="game-container game-container-${this.nameGame}">
      <div class="game-container-wrapper">
        ${this.getNavigationHTML()}
        ${this.getInformationHTML()}
        ${this.getSettingsGameHTML()}
      </div>
    </div>`;
  }

  getInformationHTML(): string {
    return `
    <div class="information">
      <hr class="shadow">
      <div class="information-container">
        <div class="info-title-container">
          <div class="game-logo"></div>
          <div class="title-container">
            <h2 class="game-title">Мемори</h2>
            <h5 class="game-difficult"> Коэффициент сложности: <b>64</b></h5>
          </div>
        </div>
        <ul class="check-container">
          <li class="check-item"><div class="check check1"></div><h5>Кратковременная память</h5></li>
          <li class="check-item"><div class="check check2"></div><h5>Наблюдательность</h5></li>
          <li class="check-item"><div class="check check3"></div><h5>Образное мышление</h5></li>
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
      <div class="game-difficult-container">
        <h5 class="game-difficult-id"> Cложность тренажера: </h5>
        <div class="container-game-difficult-id"></div>
      </div>
      <a class="game-rules" href="#">
        <h5>Правила игры</h5>
        <div class="question"></div>
      </a>
      <h5> Пригласите друзей на тренировку: </h5>
      <ul class="link-container">
        <li class="link-item"><a href="/https://www.facebook.com/"><div class="facebook"></div></a></li>
        <li class="link-item"><a href="/https://ok.ru/"><div class="odnoklassniki"></div></a></li>
        <li class="link-item"><a href="/https://https://login.microsoftonline.com/"><div class="open-letter"></div></a></li>
      </ul>
    </div>`;
  }

  getResultHTML(): string {
    return `
    <div class="result-container">
      <cicle class="percentages-circle">
        <div class="percentages"><h5>100%</h5></div>
      </cicle>
      <div class="result-container-block">
        <h5 class="results-title">РЕЗУЛЬТАТ:</h5><span class="number big">90</span>
        <div class="result-row"><h6 class="results-success">Правильных:</h6><span class="number green">9</span></div>
        <div class="result-row"><h6 class="results-errors">Неправильных:</h6><span class="number red">0</span></div>
      </div>
    </div>`;
  }

  getGameWrapperHTML(): string {
    return `
    <div class="info-bar">
      <h5 class="intro-p">Найдите логическую пару</h5>
      <div class="button-close-start">
        <button class="button-close">
          <div class="close-small"></div>
        </button>
      </div>
    </div>
    <div class="time-ruler-red"></div>
    <div class="time-ruler"></div>
    <div class="game"></div>`;
  }

  getNavigationHTML(): string {
    return `
    <div class="navigation">
      <button type="button" class="button-navigation">
        <div class="check-mark"></div>
        <span  class="grey text">Очки: </span>
        <span><b class="white"> 0 </b></span>
      </button>
      <div class="navigation-block">
        <button type="button" class="button-navigation">
          <div class="flag"></div>
            <span class="grey text">Уровень: </span>
            <span><b class="white">1 / </b></span>
            <span><b class="grey"> 8</b> </span>
        </button>
        <button type="button" class="button-navigation">
          <div class="stopwatch"></div>
          <span class="grey text">Время: </span><span><b class="white">60</b></span>
        </button>
      </div>
    </div>`;
  }
}
