import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import bodyArea from './bodyArea';
import { getElement } from '../utils/utils';
import { SessionData } from '../types/types';

export default class GamePageStart {
  static draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    GamePageStart.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('game-main-start');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow" onclick="${bodyArea}"></div>
    <div class="game-container">
      <div class="game-container-wrapper">
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
              <span class="grey text" >Время: </span><span><b class="white">60</b></span>
            </button>
          </div>
        </div>
        <div class="info-bar">
          <h5 class="intro-p">Найдите логическую пару</h5>
          <form class="button-close-start" action="/game-result">
            <button class="button-close">
              <div class="close-small"></div>
            </button>
          </form>  
        </div>
        <div class="time-ruler-red"></div>
        <div class="time-ruler"></div>
        <div class="game"></div>
      </div>
    </div>`;
  }
}
